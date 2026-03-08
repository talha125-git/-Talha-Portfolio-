import React from "react";
import PageTransition from "./PageTransition";


const About = () => {
    const skills = [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 60 },
        { name: "React.js", level: 65 },
        { name: "Node.js", level: 40 },
        { name: "Python AI/ML", level: 43 },
        { name: "MongoDB", level: 35 },
    ];

    const experiences = [
        {
            year: "2023 - Present",
            title: "Frontend Developer",
            company: "Freelance",
            description: "Building responsive, user-centric web applications using React.js and modern CSS frameworks.",
        },
        {
            year: "2025 - 2026",
            title: "Web Development Intern",
            company: "Kreashion Software House",
            description: "Assisted in developing and maintaining client websites. Gained hands-on experience with frontend development.",
        },
        {
            year: "2026 - Present",
            title: "Backend Development (Learning Phase)",
            company: "Self-Learning / Projects",
            description: "Currently learning backend development with Node.js and MongoDB. Building small projects to understand server-side programming, APIs, and database integration.",
        },
        {
            year: "2023 - 2027",
            title: "BS Software Engineering",
            company: "CECOS University Peshawar",
            description: "Currently pursuing a Bachelor's degree in Software Engineering, focusing on web development, data structures, artificial intelligence (AI), and machine learning (ML).",
        },
    ];

    return (
        <PageTransition>
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
                        <div className="space-y-3 text-slate-300">
                            <p><span className="text-white font-medium">Name:</span> Malik Abutalha Raheem</p>
                            <p><span className="text-white font-medium">Age:</span> 23 Years</p>
                            <p><span className="text-white font-medium">Location:</span> Pakistan</p>
                            <p><span className="text-white font-medium">Email:</span> abutalha@example.com</p>
                            <p><span className="text-white font-medium">Languages:</span> English, Urdu</p>
                        </div>
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

                {/* Skills Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-slate-100">
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-slate-200 font-medium">{skill.name}</span>
                                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div>
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
        </PageTransition>
    );
};

export default About;
