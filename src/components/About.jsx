import React from "react";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiCplusplus } from "react-icons/si";

const About = () => {
    const skills = [
        { name: "HTML/CSS", icon: <FaHtml5 />, tag: "Markup & Styling", color: "text-orange-500" },
        { name: "JavaScript", icon: <FaJs />, tag: "Scripting", color: "text-yellow-400" },
        { name: "React.js", icon: <FaReact />, tag: "UI Framework", color: "text-cyan-400" },
        { name: "Node.js", icon: <FaNodeJs />, tag: "Runtime", color: "text-green-500" },
        { name: "Python AI/ML", icon: <FaPython />, tag: "Machine Learning", color: "text-blue-400" },
        { name: "MongoDB", icon: <SiMongodb />, tag: "Database", color: "text-emerald-500" },
        // {
        //     name: "C / C++ / Assembly",
        //     icon: <SiCplusplus />,
        //     tag: "Low-Level Programming",
        //     color: "text-blue-600",
        //     wide: true,
        // },
        // { name: "Database",           icon: <FaDatabase />,  tag: "SQL & Data Storage", color: "text-violet-400" },

    ];

    const experiences = [
        {
            year: "2023 - Present",
            title: "Frontend Developer",
            company: "Freelance",
            description:
                "Building responsive, user-centric web applications using React.js and modern CSS frameworks.",
        },
        {
            year: "2025 - 2026",
            title: "Web Development Intern",
            company: "Kreashion Software House",
            description:
                "Assisted in developing and maintaining client websites. Gained hands-on experience with frontend development.",
        },
        {
            year: "2026 - Present",
            title: "Backend Development (Learning Phase)",
            company: "Self-Learning / Projects",
            description:
                "Currently learning backend development with Node.js and MongoDB. Building small projects to understand server-side programming, APIs, and database integration.",
        },
        {
            year: "2023 - 2027",
            title: "BS Software Engineering",
            company: "CECOS University Peshawar",
            description:
                "Currently pursuing a Bachelor's degree in Software Engineering, focusing on web development, data structures, artificial intelligence (AI), and machine learning (ML).",
        },
    ];

    return (
        <section className="flex-1 py-12 px-6 md:px-12 lg:px-16">
            {/* Page Title */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
                    About <span className="text-blue-500">Me</span>
                </h1>
                <div className="w-16 h-1 bg-blue-500 mt-3 rounded-full"></div>
            </div>

            {/* Bio Section */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-slate-100">Personal Info</h2>
                    <table className="text-slate-300">
                        <tbody className="space-y-3">
                            <tr>
                                <td className="text-white font-medium pr-4 py-1">Name:</td>
                                <td>Malik Abutalha Raheem</td>
                            </tr>
                            <tr>
                                <td className="text-white font-medium pr-4 py-1">Age:</td>
                                <td>23 Years</td>
                            </tr>
                            <tr>
                                <td className="text-white font-medium pr-4 py-1">Location:</td>
                                <td>Pakistan</td>
                            </tr>
                            <tr>
                                <td className="text-white font-medium pr-4 py-1">Email:</td>
                                <td>abutalhaa844@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="text-white font-medium pr-4 py-1">Languages:</td>
                                <td>English, Urdu, Pushtu</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-slate-100">What I Do</h2>
                    <p className="text-slate-300 leading-relaxed">
                        I am a creative web developer with a passion for building beautiful,
                        functional websites. I specialize in front-end development using React.js
                        and modern CSS frameworks. I love turning complex problems into simple,
                        elegant solutions that provide real value to users.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-4">
                        With a solid foundation in computer science and hands-on experience
                        in web development, I bring both technical expertise and creative
                        thinking to every project I work on.
                    </p>
                </div>
            </div>

            {/* Skills Section — Card Grid with react-icons */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-8 text-slate-100">
                    My <span className="text-blue-500">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 cursor-default"
                        >
                            <span className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                {skill.icon}
                            </span>
                            <div className="text-center">
                                <p className="text-white font-semibold text-sm leading-tight">
                                    {skill.name}
                                </p>
                                <p className="text-blue-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {skill.tag}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Section */}
            <div className="pb-12">
                <h2 className="text-2xl font-semibold mb-8 text-slate-100">
                    Experience & <span className="text-blue-500">Education</span>
                </h2>
                <div className="relative border-l-2 border-slate-700 ml-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 ml-8 group">
                            <div className="absolute -left-[11px] w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-sm text-blue-400 font-semibold">{exp.year}</span>
                            <h3 className="text-xl font-semibold text-white mt-1">{exp.title}</h3>
                            <p className="text-slate-400 text-sm italic">{exp.company}</p>
                            <p className="text-slate-300 mt-2 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;