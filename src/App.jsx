import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import Contact from "./components/Contact";
import FullPageScroll from "./components/FullPageScroll";
import "./components/FullPageScroll.css";
import "./App.css";

function FullPageContent() {
  return (
    <FullPageScroll>
      <Home />
      <About />
      <Portfolio />
      <News />
      <Contact />
    </FullPageScroll>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1 w-full lg:ml-[320px]">
          <MobileHeader />
          {/* All routes render the same FullPageContent; the scroll position is synced with the route */}
          <Routes>
            <Route path="/*" element={<FullPageContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
