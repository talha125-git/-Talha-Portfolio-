import React, { useState } from "react";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ⬇️ PASTE YOUR WEB3FORMS ACCESS KEY HERE ⬇️
    const WEB3FORMS_KEY = "9c71c942-7300-44fd-b950-ce3f1d469d7f";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("sent");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (err) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const contactInfo = [
        { icon: "bi-geo-alt-fill", label: "Location", value: "Pakistan" },
        { icon: "bi-telephone-fill", label: "Phone", value: "+92 347 67 22 423" },
        { icon: "bi-envelope-fill", label: "Email", value: "malikabutalharaheem@gmail.com" },
    ];

    return (
        <section className="flex-1 py-12 px-6 md:px-12 lg:px-16">
            {/* Page Title */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
                    Get In <span className="text-blue-500">Touch</span>
                </h1>
                <div className="w-16 h-1 bg-blue-500 mt-3 rounded-full"></div>
                <p className="text-slate-400 mt-4 text-lg">Have a project in mind? Let's work together!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 pb-12">
                {/* Contact Info */}
                <div className="md:col-span-1 space-y-6">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                                <i className={`bi ${item.icon} text-blue-400 text-xl`}></i>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">{item.label}</p>
                                <p className="text-white font-medium">{item.value}</p>
                            </div>
                        </div>
                    ))}

                    {/* Social Links */}
                    <div className="pt-6 border-t border-slate-700/50">
                        <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
                            Follow Me
                        </p>

                        <div className="flex gap-3">
                            {[
                                {
                                    icon: "bi-linkedin",
                                    color: "hover:bg-blue-600",
                                    link: "https://www.linkedin.com/in/malik-abutalha-raheem-b89b09354",
                                },
                                {
                                    icon: "bi-facebook",
                                    color: "hover:bg-blue-700",
                                    link: "https://www.facebook.com/profile.php?id=100023337737054",
                                },
                                {
                                    icon: "bi-twitter-x",
                                    color: "hover:bg-black",
                                    link: "https://x.com/abutalha125",
                                },
                                {
                                    icon: "bi-instagram",
                                    color: "hover:bg-pink-600",
                                    link: "https://www.instagram.com/abutalha.2288/",
                                },
                                {
                                    icon: "bi-github",
                                    color: "hover:bg-gray-600",
                                    link: "https://github.com/talha125-git",
                                },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110`}
                                >
                                    <i className={`bi ${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                    placeholder="Talha"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                    placeholder="talha@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                placeholder="Project Discussion"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 active:scale-95 ${status === "sending"
                                ? "bg-blue-400 cursor-not-allowed"
                                : status === "sent"
                                    ? "bg-green-500"
                                    : status === "error"
                                        ? "bg-red-500"
                                        : "bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                                } text-white`}
                        >
                            {status === "sending" ? (
                                <span className="flex items-center gap-2">
                                    <i className="bi bi-arrow-repeat animate-spin"></i> Sending...
                                </span>
                            ) : status === "sent" ? (
                                <span className="flex items-center gap-2">
                                    <i className="bi bi-check-circle"></i> Message Sent!
                                </span>
                            ) : status === "error" ? (
                                <span className="flex items-center gap-2">
                                    <i className="bi bi-exclamation-circle"></i> Failed, try again
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <i className="bi bi-send"></i> Send Message
                                </span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
