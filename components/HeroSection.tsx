"use client";

import Image from "next/image";
import { FiChevronDown, FiStar } from "react-icons/fi";

export default function HeroSection() {
    const socialProofImages = [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg",
        "https://randomuser.me/api/portraits/men/46.jpg",
        "https://randomuser.me/api/portraits/women/17.jpg",
    ];

    return (
        <section
            id="home"
            className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    playsInline
                    poster="/images/hero-paternoster.png"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/hero-paternoster.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Subtle darkening */}
            <div className="absolute inset-0 bg-black/5 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full pt-20">
                <div className="text-left animate-slide-up bg-white/60 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/60 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:bg-white/70">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-cta/10 text-cta font-medium text-base mb-8 border border-cta/20 tracking-wide">
                        Psychotherapie Paternoster
                    </span>

                    <h1 className="text-4xl md:text-5xl font-display mb-8 leading-tight text-gray-900 drop-shadow-sm">
                        Ein geschützter Raum für <span className="text-primary font-bold">Ihre Entwicklung</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 text-gray-800 font-light leading-loose">
                        Verstehen Sie alte Muster. Finden Sie neue Wege. Professionelle Begleitung in einem warmen, klaren und direkten Umfeld.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-10">
                        <a
                            href="#booking"
                            className="bg-cta text-white px-10 py-5 rounded-2xl text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl hover:shadow-cta/30 transform hover:-translate-y-1 text-center"
                        >
                            Erstgespräch vereinbaren
                        </a>
                        <a
                            href="#therapy"
                            className="bg-white/80 backdrop-blur-md text-primary px-10 py-5 rounded-2xl text-lg font-medium hover:bg-white transition-all border border-primary/20 shadow-md hover:shadow-lg text-center"
                        >
                            Meine Schwerpunkte
                        </a>
                    </div>

                    <div className="flex items-center gap-5 pt-2 border-t border-gray-200/50">
                        <div className="flex -space-x-4 hover:space-x-1 transition-all duration-300">
                            {socialProofImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt="Client"
                                    className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm hover:scale-110 transition-transform"
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="flex text-yellow-500 text-base">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} fill="currentColor" className="w-5 h-5 drop-shadow-sm" />
                                ))}
                            </div>
                            <p className="text-base font-medium text-gray-700">Vertrauensvoll & Diskret</p>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block"></div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <FiChevronDown className="text-primary text-4xl opacity-80 decoration-slice" />
            </div>
        </section>
    );
}
