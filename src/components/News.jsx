import React from "react";


const News = () => {
    const articles = [
        {
            date: "March 5, 2026",
            category: "Development",
            title: "Building Responsive Layouts with Modern CSS",
            excerpt: "Learn how to create pixel-perfect responsive designs using CSS Grid, Flexbox, and modern techniques that adapt seamlessly to any screen size.",
            readTime: "5 min read",
        },
        {
            date: "February 20, 2026",
            category: "React",
            title: "React 19: What's New and Exciting",
            excerpt: "Explore the latest features in React 19 including Server Components, improved Suspense, and the new use() hook that simplifies async data fetching.",
            readTime: "7 min read",
        },
        {
            date: "February 10, 2026",
            category: "Career",
            title: "From Student to Developer: My Journey",
            excerpt: "A personal story about transitioning from a computer science student to a working web developer, including tips and lessons learned along the way.",
            readTime: "8 min read",
        },
        // {
        //     date: "January 28, 2026",
        //     category: "Tutorial",
        //     title: "Mastering Tailwind CSS: Tips & Tricks",
        //     excerpt: "Discover advanced Tailwind CSS techniques to speed up your workflow, create custom designs, and build production-ready interfaces faster.",
        //     readTime: "6 min read",
        // },
        {
            date: "March 1, 2026",
            category: "Python",
            title: "Python Projects",
            excerpt: "Worked on multiple Python projects including Face Recognition using OpenCV, Emotion Detection from Text using NLP techniques, and a Hostel Management System to manage student records, rooms, and hostel administration.",
            readTime: "5 min read",
        },
    ];

    const categoryColors = {
        Development: "bg-blue-500/20 text-blue-400",
        React: "bg-cyan-500/20 text-cyan-400",
        Career: "bg-green-500/20 text-green-400",
        Tutorial: "bg-purple-500/20 text-purple-400",
        Design: "bg-pink-500/20 text-pink-400",
    };

    return (
        <section className="flex-1 py-12 px-6 md:px-12 lg:px-16">
            {/* Page Title */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
                    Latest <span className="text-blue-500">News</span>
                </h1>
                <div className="w-16 h-1 bg-blue-500 mt-3 rounded-full"></div>
                <p className="text-slate-400 mt-4 text-lg">Thoughts, tutorials, and updates from my development journey.</p>
            </div>

            {/* Articles */}
            <div className="space-y-6 pb-12">
                {articles.map((article, index) => (
                    <article
                        key={index}
                        className="group bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-500 hover:bg-slate-800/70 cursor-pointer"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                            {/* Date Column */}
                            <div className="sm:w-28 flex-shrink-0">
                                <p className="text-sm text-slate-500 font-medium">{article.date}</p>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-slate-700 text-slate-300"}`}>
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-slate-500">{article.readTime}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                    {article.title}
                                </h2>
                                <p className="text-slate-400 mt-2 leading-relaxed">{article.excerpt}</p>
                                <span className="inline-block mt-3 text-blue-400 text-sm font-semibold group-hover:tracking-wider transition-all duration-300">
                                    Read More →
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default News;
