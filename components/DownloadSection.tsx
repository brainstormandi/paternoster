"use client";

import { FiDownload, FiFileText, FiSun, FiLifeBuoy } from "react-icons/fi";

export default function DownloadSection() {
    const downloads = [
        {
            title: "Achtsamkeitsübung",
            description: "Eine einfache Übung für mehr Ruhe im Alltag.",
            filename: "achtsamkeitsuebung.html",
            link: "/downloads/achtsamkeitsuebung.html",
            buttonText: "Kostenlos nutzen",
            Icon: FiSun,
        },
        {
            title: "Notfall-Guide",
            description: "Wichtige Kontakte und Strategien für Krisensituationen.",
            filename: "notfall-guide.html",
            link: "/downloads/notfall-guide.html",
            buttonText: "Guide öffnen",
            Icon: FiLifeBuoy,
        },
    ];

    return (
        <section id="downloads" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-accent/20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 space-y-4 animate-slide-up">
                        <span className="text-cta font-medium uppercase tracking-wider text-sm bg-cta/5 px-4 py-1 rounded-full inline-block">Ressourcen</span>
                        <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
                            Kostenlose <span className="text-gradient">Unterstützung</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                            Kleine Hilfsmittel für Ihren Alltag.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {downloads.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-cta/20 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-start gap-6 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                <div className="w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center text-cta group-hover:bg-cta group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                                    <FiFileText className="text-3xl" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-display text-gray-900 mb-2 group-hover:text-cta transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto w-full bg-cta text-white py-4 px-6 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-white hover:text-cta border-2 border-cta transition-all shadow-md hover:shadow-cta/30 transform hover:-translate-y-0.5"
                                >
                                    <item.Icon className="text-xl" />
                                    {item.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center text-sm text-gray-500 font-light bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200 inline-block mx-auto">
                        Hinweis: Diese Materialien ersetzen keine professionelle Therapie.
                    </div>

                </div>
            </div>
        </section>
    );
}
