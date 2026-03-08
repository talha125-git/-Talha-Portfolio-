import React from "react";
import talha1 from '../images/talha1.jpg';
import PageTransition from "./PageTransition";
import cv from '../assets/Talha_Resume.pdf'

const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'Talha_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <PageTransition>
            <section className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] lg:min-h-screen px-4" id="content">
                <div className="flex py-4 flex-col lg:flex-row items-center gap-10 max-w-4xl w-full">
                    <div className="relative flex justify-center flex-shrink-0">
                        <img
                            src={talha1}
                            alt="Abutalha Raheem"
                            className="md:w-64 w-44 md:h-64 h-44 rounded-full object-cover shadow-xl ring-4 ring-slate-700/50"
                        />
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <div>
                        <h1 className="uppercase md:text-4xl text-2xl text-center lg:text-start font-bold">
                            Malik <span className="text-blue-400"> Abutalha </span> Raheem
                        </h1>
                        <div className="w-32 h-1 mt-1 bg-blue-500  rounded-full"></div>
                        </div>
                        
                        <p className="text-lg italic mt-6 px-3 lg:px-0 text-center lg:text-start text-slate-300 max-w-lg">
                            Creative web developer dedicated to building and optimizing
                            the performance of user-centric, high-impact websites having a
                            graduation degree in computer science.
                        </p>
                        <div className="space-x-3 mt-5 flex justify-center lg:justify-start">
                            <a href="https://www.linkedin.com/in/malik-abutalha-raheem-b89b09354" className="text-xl text-blue-500 hover:text-blue-400 hover:scale-125 transition-all duration-300">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100023337737054" className="text-xl text-blue-600 hover:text-blue-500 hover:scale-125 transition-all duration-300">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://x.com/abutalha125" className="text-xl text-white hover:text-blue-900 hover:scale-125 transition-all duration-300">
                                <i className="bi-twitter-x"></i>
                            </a>
                            <a href="https://www.instagram.com/abutalha.2288/" className="text-xl text-pink-500 hover:text-pink-400 hover:scale-125 transition-all duration-300">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                        <div className="lg:mt-2 mt-5 justify-center flex lg:justify-end  cursor-pointer">
                            <div>
                                <a
                                    onClick={handleDownload}
                                    className='text-sm font-semibold uppercase tracking-wide'
                                >
                                    Download <span className="text-blue-500">CV</span>
                                </a>
                                <div className="w-[83px] h-1 bg-blue-500  rounded-full"></div>
                            </div>
                        </div>

                    </div>


                </div>

            </section>
        </PageTransition>
    );
};

export default Home;
