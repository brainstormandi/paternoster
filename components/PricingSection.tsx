"use client";

import { FiClock, FiCheck, FiArrowRight } from "react-icons/fi";

export default function PricingSection() {
    const plans = [
        {
            title: "Erstgespräch",
            price: "50",
            duration: "50 Min",
            desc: "Kennenlernen & Orientierung",
            features: ["Unverbindliches Kennenlernen", "Klärung Ihres Anliegens", "Erste Orientierung", "Kein Druck zur Fortsetzung"],
            highlight: false,
        },
        {
            title: "Einzeltherapie",
            price: "80",
            duration: "50 Min",
            desc: "Laufende Begleitung",
            features: ["Individuelle Sitzungen", "Persönliche Entwicklung", "Krisenbewältigung", "Veränderungsarbeit"],
            highlight: true,
        },
        {
            title: "Paartherapie",
            price: "140",
            duration: "75 Min",
            desc: "Gemeinsam wachsen",
            features: ["Beziehungsdynamik verstehen", "Konflikte lösen", "Nähe wiederfinden", "Gemeinsame Ziele"],
            highlight: false,
        },
    ];

    return (
        <section id="pricing" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Aurora Background Effect */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none aurora-bg opacity-40 mix-blend-multiply" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16 space-y-4">
                        <span className="text-cta font-medium uppercase tracking-wider text-base">Transparente Konditionen</span>
                        <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
                            Investition in Ihre <span className="text-gradient">Gesundheit</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative p-8 rounded-[2rem] border transition-all duration-300 transform hover:-translate-y-2
                  ${plan.highlight
                                        ? 'bg-white shadow-2xl border-cta/20 scale-105 z-10'
                                        : 'bg-white/60 backdrop-blur-sm border-gray-100 shadow-lg hover:bg-white'}
                `}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                        Häufigste Wahl
                                    </div>
                                )}

                                <h3 className="text-2xl font-display text-gray-900 mb-2">{plan.title}</h3>
                                <p className="text-gray-500 text-lg mb-6">{plan.desc}</p>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price} €</span>
                                    <span className="text-gray-400">/ {plan.duration}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 text-lg">
                                            <FiCheck className={`mt-1 flex-shrink-0 ${plan.highlight ? 'text-cta' : 'text-primary'}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#booking"
                                    className={`w-full block py-3 rounded-xl text-center font-medium transition-all
                    ${plan.highlight
                                            ? 'bg-cta text-white hover:bg-opacity-90 shadow-lg hover:shadow-cta/30'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
                  `}
                                >
                                    Termin anfragen <FiArrowRight className="inline ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white/50 backdrop-blur border border-primary/10 rounded-2xl p-8 max-w-3xl mx-auto text-center space-y-4">
                        <div className="inline-block p-2 rounded-full bg-primary/10 text-primary mb-2">
                            <FiClock className="text-xl" />
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
                            <strong>Warum diese Preise?</strong><br />
                            Ich arbeite als Psychotherapeut in Ausbildung unter Supervision. Sie profitieren von vergünstigten Tarifen (üblich: 110-130€), erhalten aber keine Rückerstattung der Krankenkasse. Der faire Fixpreis von 80€ gleicht dies aus.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
