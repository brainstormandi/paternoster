
"use client";

import Image from "next/image";
import { FiCalendar, FiArrowRight, FiPhone } from "react-icons/fi";

export default function BookingSection() {
    return (
        <section
            id="booking"
            className="py-40 relative overflow-hidden flex items-center justify-center min-h-[600px]"
        >
            {/* Background Image with Parallax Effect - Optimized */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Hintergrundbild Terminbuchung"
                    fill
                    className="object-cover"
                    quality={80}
                    sizes="100vw"
                />
            </div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] z-10" />

            {/* Aurora Overlay (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-900/20 pointer-events-none mix-blend-overlay z-10" />

            <div className="container mx-auto px-6 relative z-20 text-center">
                <div className="max-w-4xl mx-auto space-y-10 animate-slide-up">

                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-white/20 shadow-2xl">
                        <FiCalendar className="text-4xl text-white" />
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight text-white drop-shadow-lg">
                        Bereit für den <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">ersten Schritt?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        Sichern Sie sich jetzt Ihren Termin für ein unverbindliches Erstgespräch.
                        Keine Wartezeit, direkte Online-Buchung möglich.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <a
                            href="https://calendly.com/" // Replace with actual booking link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cta text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-white hover:text-cta transition-all shadow-xl hover:shadow-cta/50 transform hover:-translate-y-1 group border-2 border-cta flex items-center justify-center gap-3"
                        >
                            Online Termin buchen
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="tel:+436801545576"
                            className="bg-white/10 border-2 border-white/30 px-10 py-5 rounded-full text-xl font-medium text-white hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-3"
                        >
                            <FiPhone /> Telefonisch anfragen
                        </a>
                    </div>

                    <p className="text-sm text-white/70 mt-12 font-medium tracking-widest uppercase border-t border-white/10 pt-8 inline-block px-8">
                        Diskret • Professionell • Einfühlsam
                    </p>
                </div>
            </div>
        </section>
    );
}
