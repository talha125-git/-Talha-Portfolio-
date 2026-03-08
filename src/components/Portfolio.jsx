import React, { useState } from "react";
import PageTransition from "./PageTransition";
import landing_page1 from "../images/landing_page1.png"
import mobile_app1 from "../images/mobile_app1.png"
import landing_page2 from "../images/Landing_page2.png"
import Ignite_pak from "../images/Ignite_Pak.png"
import portfolio_web_react1 from "../images/portfolio_web_react1.png"
import Nefa_Web from "../images/Nefa_Web.png"
import Internship_p1 from "../images/Internship_p1.png"
import Internship_p2 from "../images/Internship_p2.png"
import Emotion_Pic from "../images/Emotion_Pic.png"
import Hostel_Pic from "../images/Hostel_Pic.png"
import food_web_pic from "../images/food_web_pic.png"
import portfolio_simple from "../images/portfolio_simple_.png"



const Portfolio = () => {
  const categories = ["All", "Web", "Mobile", "Design", "Intern", "Python AI/ML"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Crypto Website",
      category: "Web",
      description: "A modern cryptocurrency website providing real-time market updates, trading insights, and secure transaction services.",
      tech: ["Figma", "HTML/CSS"],
      image: Nefa_Web,
      link: "https://talha125-git.github.io/tcss-nefa-web-complete/nefa2.html",
    },
    {
      title: "Portfolio Website",
      category: "Web",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: portfolio_web_react1,
      link: "https://talha125-git.github.io/React-Protfolio1/",
    },
    {
      title: "Portfolio Simple",
      category: "Web",
      description: "A modern, responsive portfolio website built with simple html with tailwind css featuring smooth animations.",
      tech: ["HTML", "Tailwind", "Framer Motion"],
      image: portfolio_simple,
      link: "https://talha125-git.github.io/Talha-portfolio-final-blue/protfolio.html#",
    },
    {
      title: "Unit Converter App",
      category: "Mobile",
      description: "Practicing mobile app development using Dart and Flutter by building functional apps like a Unit Converter.",
      tech: ["React Native", "Flutter"],
      image: mobile_app1,
      link: "https://talha125-git.github.io/Unit_Converter-App/",
    },
    {
      title: "Medical Landing page",
      category: "Design",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      tech: ["Figma", "HTML/CSS"],
      image: landing_page2,
      link: "https://talha125-git.github.io/Medical-Landing-pg/index.html",
    },
    {
      title: "Ignite Pakistan",
      category: "Web",
      description: "A platform aimed at fostering innovation and entrepreneurship in Pakistan by connecting startups with investors and resources.",
      tech: ["Tailwind CSS", "Frontened"],
      image: Ignite_pak,
      link: "https://talha125-git.github.io/Ignite-pakistan1/index%20.html",
    },

    {
      title: "Honey Website",
      category: "Web",
      description: "A website showcasing different types of honey and honey products.",
      tech: ["HTML/CSS", "JS", "Animation"],
      image: food_web_pic,
      link: "https://talha125-git.github.io/css-project-Food-web-/food.html",
    },
    {
      title: "Landing Page",
      category: "Design",
      description: "High-converting landing page design with A/B testing variants and analytics integration.",
      tech: ["Figma", "HTML/CSS"],
      image: landing_page1,
      link: "https://talha125-git.github.io/landing_page1/",
    },

    {
      title: "Internship Project 1",
      category: "Intern",
      description: "A UK accountancy firm providing tax and accounting services for individuals and businesses.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: Internship_p1,
      link: "https://talha125-git.github.io/intern_p1/",
    },
    {
      title: "Internship Project 2",
      category: "Intern",
      description: "A Swiss platform connecting businesses with flexible, temporary workers.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: Internship_p2,
      link: "https://intern-p2.vercel.app/",
    },
    {
      title: "Emotion Detection from Text",
      category: "Python AI/ML",
      description: "Analyzes textual input to detect emotions using NLP and Python AI libraries.",
      tech: ["React", "Python (Flask/FastAPI)", "Pandas/joblib"],
      image: Emotion_Pic,
      link: "https://emotion-detection-2a.vercel.app/",
    },
    {
      title: "Hostel Management System",
      category: "Python AI/ML",
      description: "Manages hostel operations including student records, room allocation etc. using Python.",
      tech: ["Streamlit", "Pandas", "Reportlab"],
      image: Hostel_Pic,
      link: "https://hostelmanagementsystem-z2hddpfpcjm4piwevy33mw.streamlit.app/",
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <section className="flex-1 py-12 px-6 md:px-12 lg:px-16">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            My <span className="text-blue-500">Portfolio</span>
          </h1>
          <div className="w-16 h-1 bg-blue-500 mt-3 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
            >
              {/* Image Header */}
              <div className="h-48 relative overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title and Category Row */}
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-700/70 text-slate-300 px-2.5 py-1 rounded-full border border-slate-600/50">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors border border-blue-500 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40"
                >
                  Visit Project <i className="bi bi-box-arrow-up-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <i className="bi bi-inbox text-5xl mb-4 block"></i>
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </section>
    </PageTransition>
  );
};

export default Portfolio;
