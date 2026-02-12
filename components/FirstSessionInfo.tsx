"use client";

import { FiMessageSquare, FiCompass, FiTarget, FiArrowRight } from "react-icons/fi";

export default function FirstSessionInfo() {
    const steps = [
        {
            icon: <FiMessageSquare className="text-4xl text-cta" />,
            title: "1. Kennenlernen",
            description: "In einem entspannten Gespräch schildern Sie mir Ihr Anliegen. Wir prüfen, ob die Chemie stimmt.",
        },
        {
            icon: <FiCompass className="text-4xl text-cta" />,
            title: "2. Orientierung",
            description: "Ich erkläre Ihnen meine Arbeitsweise und wir besprechen gemeinsam mögliche Ziele und den Rahmen.",
        },
        {
            icon: <FiTarget className="text-4xl text-cta" />,
            title: "3. Entscheidung",
            description: "Sie entscheiden in Ruhe, ob Sie den Weg gemeinsam weitergehen möchten. Ganz ohne Druck.",
        },
    ];

    return (
        <section id="process" className="py-32 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16 space-y-4 animate-slide-up">
                        <span className="text-cta font-medium uppercase tracking-wider text-sm">Der Ablauf</span>
                        <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
                            Wie wir <span className="text-gradient">beginnen</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                            Der erste Schritt erfordert oft Mut. Hier erfahren Sie, was Sie erwartet – transparent und unkompliziert.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-cta/20 to-transparent dashed opacity-50" />

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl hover:border-cta/20 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center animate-slide-up"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="w-20 h-20 rounded-full bg-cta/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 bg-white shadow-sm ring-4 ring-white">
                                    {step.icon}
                                </div>

                                <h3 className="text-2xl font-display text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center animate-fade-in">
                        <a href="#booking" className="inline-flex items-center gap-2 text-cta font-medium hover:text-primary transition-colors border-b border-cta/30 hover:border-primary pb-0.5">
                            Zum Erstgespräch anmelden <FiArrowRight />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
