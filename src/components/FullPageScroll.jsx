import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sections = [
    { id: "home", path: "/", label: "Home" },
    { id: "about", path: "/about", label: "About" },
    { id: "portfolio", path: "/portfolio", label: "Portfolio" },
    { id: "news", path: "/news", label: "News" },
    { id: "contact", path: "/contact", label: "Contact" },
];

const FullPageScroll = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Find current section index based on route
    const getCurrentIndex = useCallback(() => {
        const idx = sections.findIndex((s) => s.path === location.pathname);
        return idx >= 0 ? idx : 0;
    }, [location.pathname]);

    const [currentIndex, setCurrentIndex] = useState(getCurrentIndex);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRefs = useRef([]);
    const containerRef = useRef(null);
    const touchStartY = useRef(0);
    const touchStartX = useRef(0);
    const accumulatedDelta = useRef(0);
    const lastScrollTime = useRef(0);

    // Boundary cooldown: track when user first hit the scroll edge
    const boundaryHitTime = useRef(0);
    const boundaryDirection = useRef(null);
    const boundaryScrollCount = useRef(0); // count of scroll events at the boundary
    const BOUNDARY_COOLDOWN = 600; // ms to wait at the edge before allowing page transition
    const BOUNDARY_SCROLL_THRESHOLD = 3; // number of scroll events needed at the boundary

    // Detect mobile vs desktop for height calculations
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Sync index with route changes (e.g. from sidebar/mobile nav clicks)
    useEffect(() => {
        const newIndex = getCurrentIndex();
        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
            // Reset boundary state on section change
            boundaryHitTime.current = 0;
            boundaryDirection.current = null;
            boundaryScrollCount.current = 0;
        }
    }, [location.pathname, getCurrentIndex]);

    // Navigate to a specific section
    const goToSection = useCallback(
        (index) => {
            if (index < 0 || index >= sections.length || isAnimating) return;
            if (index === currentIndex) return;

            setIsAnimating(true);
            setCurrentIndex(index);
            navigate(sections[index].path, { replace: true });

            // Reset boundary tracking
            boundaryHitTime.current = 0;
            boundaryDirection.current = null;
            boundaryScrollCount.current = 0;

            // Allow animation to complete
            setTimeout(() => {
                setIsAnimating(false);
                accumulatedDelta.current = 0;
            }, 800);
        },
        [currentIndex, isAnimating, navigate]
    );

    // Check if the inner content of the current section is scrollable
    const canSectionScroll = useCallback((direction) => {
        const sectionEl = sectionRefs.current[currentIndex];
        if (!sectionEl) return false;

        const innerContent = sectionEl.querySelector(".section-inner");
        if (!innerContent) return false;

        const { scrollTop, scrollHeight, clientHeight } = innerContent;
        const tolerance = 5;

        if (direction === "down") {
            // Can scroll down within the section?
            return scrollTop + clientHeight < scrollHeight - tolerance;
        } else {
            // Can scroll up within the section?
            return scrollTop > tolerance;
        }
    }, [currentIndex]);

    // Check if the section has any scrollable content at all (content taller than viewport)
    const isSectionScrollable = useCallback(() => {
        const sectionEl = sectionRefs.current[currentIndex];
        if (!sectionEl) return false;

        const innerContent = sectionEl.querySelector(".section-inner");
        if (!innerContent) return false;

        return innerContent.scrollHeight > innerContent.clientHeight + 5;
    }, [currentIndex]);

    // Wheel handler
    useEffect(() => {
        const handleWheel = (e) => {
            // Don't intercept if user is inside a scrollable child (like a dropdown or modal)
            const target = e.target;
            if (target.closest(".no-snap-scroll")) return;

            const now = Date.now();
            const direction = e.deltaY > 0 ? "down" : "up";

            // If the section's inner content can still scroll in this direction, let it
            if (canSectionScroll(direction)) {
                // User is scrolling within content — reset boundary tracking
                boundaryHitTime.current = 0;
                boundaryDirection.current = null;
                boundaryScrollCount.current = 0;
                return;
            }

            e.preventDefault();

            // If this section has scrollable content, enforce boundary cooldown
            // (don't immediately jump when fast scroll hits the edge)
            if (isSectionScrollable()) {
                if (boundaryDirection.current !== direction) {
                    // First time hitting this edge, or direction changed — start fresh
                    boundaryHitTime.current = now;
                    boundaryDirection.current = direction;
                    boundaryScrollCount.current = 1;
                    accumulatedDelta.current = 0;
                    return;
                }

                // Increment boundary scroll count
                boundaryScrollCount.current += 1;

                // Check if we've waited long enough AND had enough scroll events at the boundary
                const timeSinceHit = now - boundaryHitTime.current;
                if (timeSinceHit < BOUNDARY_COOLDOWN || boundaryScrollCount.current < BOUNDARY_SCROLL_THRESHOLD) {     
                    // Not ready yet — don't transition
                    return;
                }
            }

            // Debounce rapid scroll events
            if (now - lastScrollTime.current < 100) {
                accumulatedDelta.current += Math.abs(e.deltaY);
            } else {
                accumulatedDelta.current = Math.abs(e.deltaY);
            }
            lastScrollTime.current = now;

            // Need enough momentum to trigger a page change
            if (accumulatedDelta.current < 50) return;

            if (direction === "down") {
                goToSection(currentIndex + 1);
            } else {
                goToSection(currentIndex - 1);
            }
        };

        const container = containerRef.current;
        if (container) { 
            container.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
    }, [currentIndex, isAnimating, goToSection, canSectionScroll]);

    // Touch handlers for mobile
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndX = e.changedTouches[0].clientX;
            const diffY = touchStartY.current - touchEndY;
            const diffX = touchStartX.current - touchEndX;

            // Only trigger if vertical swipe is dominant and large enough
            if (Math.abs(diffY) < 60 || Math.abs(diffX) > Math.abs(diffY)) return;

            const direction = diffY > 0 ? "down" : "up";

            if (canSectionScroll(direction)) return;

            if (direction === "down") {
                goToSection(currentIndex + 1);
            } else {
                goToSection(currentIndex - 1);
            }
        };

        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex, isAnimating, goToSection, canSectionScroll]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Don't intercept if user is typing in an input/textarea
            if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

            if (e.key === "ArrowDown" || e.key === "PageDown") {
                if (!canSectionScroll("down")) {
                    e.preventDefault();
                    goToSection(currentIndex + 1);
                }
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                if (!canSectionScroll("up")) {
                    e.preventDefault();
                    goToSection(currentIndex - 1);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, goToSection, canSectionScroll]);

    // Reset inner scroll when navigating to a new section
    useEffect(() => {
        const sectionEl = sectionRefs.current[currentIndex];
        if (sectionEl) {
            const innerContent = sectionEl.querySelector(".section-inner");
            if (innerContent) {
                innerContent.scrollTop = 0;
            }
        }
    }, [currentIndex]);

    // Convert children to array
    const childrenArray = React.Children.toArray(children);

    return (
        <div ref={containerRef} className="fullpage-container">
            {/* Sections */}
            <div
                className="fullpage-wrapper"
                style={{
                    transform: isMobile
                        ? `translateY(calc(-${currentIndex} * (100vh - 52px)))`
                        : `translateY(-${currentIndex * 100}vh)`,
                }}
            >
                {childrenArray.map((child, index) => (
                    <div
                        key={sections[index]?.id || index}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className={`fullpage-section ${index === currentIndex ? "active" : ""}`}
                    >
                        <div className="section-inner">
                            {child}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot Navigation */}
            {/* <nav className="fullpage-dots" aria-label="Page navigation">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        className={`fullpage-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSection(index)}
                        aria-label={`Go to ${section.label}`}
                        title={section.label}
                    >
                        <span className="dot-tooltip">{section.label}</span>
                    </button>
                ))}
            </nav> */}

            {/* Scroll indicator on first section */}
            <div className={`scroll-indicator ${currentIndex === 0 ? "visible" : ""}`}>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text">Scroll Down</span>
            </div>
        </div>
    );
};

export default FullPageScroll;
