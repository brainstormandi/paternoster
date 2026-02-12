"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHeart } from "react-icons/fi";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Zahlt die Krankenkasse die Therapie?",
            answer: "Ich arbeite als Psychotherapeut in Ausbildung unter Supervision. Das bedeutet: Ich befinde mich am Ende meiner Ausbildung, arbeite eigenständig und werde von erfahrenen Therapeut:innen begleitet. Daher biete ich meine Leistungen zu einem deutlich vergünstigten Tarif an. Bei mir gibt es keine Rückerstattung durch die Krankenkasse. Dafür ist der Preis bereits angepasst und fair gehalten. (Zum Vergleich: Eingetragene Psychotherapeut:innen verlangen 110–130 €. Davon werden üblicherweise 30–40 € von der Krankenkasse refundiert. Bei mir entfällt die Rückerstattung – daher der vergünstigte Fixpreis von 80 €.)",
        },
        {
            question: "Wie lange dauert eine Therapie?",
            answer: "Das ist sehr individuell und hängt von Ihren Zielen ab. Manche Menschen kommen für einige Wochen, andere für mehrere Monate. Wir besprechen regelmäßig, wie es Ihnen geht und ob die Therapie noch passt. Sie entscheiden selbst, wann Sie bereit sind aufzuhören.",
        },
        {
            question: "Was ist, wenn ich einen Termin absagen muss?",
            answer: "Das Leben ist manchmal unvorhersehbar – das verstehe ich. Bitte sagen Sie Termine mindestens 24 Stunden vorher ab, damit ich die Zeit anderweitig vergeben kann. Bei kurzfristigeren Absagen muss ich leider das Honorar verrechnen.",
        },
        {
            question: "Wie läuft das Erstgespräch ab?",
            answer: "Im Erstgespräch lernen wir uns kennen. Sie erzählen mir, was Sie zu mir führt, und ich erkläre Ihnen, wie ich arbeite. Danach können Sie in Ruhe entscheiden, ob Sie weitermachen möchten. Es gibt keinen Druck – das Erstgespräch ist unverbindlich.",
        },
        {
            question: "Ist Psychotherapie vertraulich?",
            answer: "Ja, absolut. Alles, was Sie mir erzählen, unterliegt der gesetzlichen Verschwiegenheitspflicht. Ich darf ohne Ihre ausdrückliche Zustimmung mit niemandem über unsere Gespräche sprechen – auch nicht mit Angehörigen.",
        },
        {
            question: "Wie schnell bekomme ich einen Termin?",
            answer: "Das hängt von meiner aktuellen Auslastung ab. In der Regel können wir innerhalb von 1-2 Wochen einen Termin für ein Erstgespräch finden. Bei akuten Krisen empfehle ich Ihnen zusätzlich die Telefonseelsorge (142) oder den psychiatrischen Notdienst.",
        },
    ];

    return (
        <section id="faq" className="py-32 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 animate-slide-up">
                        <span className="block text-cta font-medium uppercase tracking-wider text-sm mb-4">Wissenswertes</span>
                        <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
                            Häufige Fragen
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Antworten auf die wichtigsten Fragen rund um die Therapie.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl transition-all duration-300 animate-slide-up overflow-hidden border
                                    ${openIndex === index
                                        ? "bg-white shadow-lg border-cta/30"
                                        : "bg-gray-50 hover:bg-white border-transparent hover:shadow-sm"
                                    }
                                `}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className={`font-display text-lg pr-4 transition-colors ${openIndex === index ? 'text-cta font-medium' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <div className="bg-cta/10 p-2 rounded-full text-cta flex-shrink-0">
                                            <FiChevronUp />
                                        </div>
                                    ) : (
                                        <div className="bg-gray-200 p-2 rounded-full text-gray-500 group-hover:bg-primary/10 group-hover:text-primary flex-shrink-0">
                                            <FiChevronDown />
                                        </div>
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-8 pb-8 text-gray-600 leading-relaxed animate-slide-down border-t border-gray-100 pt-4 text-lg">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
                        <FiHeart className="text-4xl text-primary mx-auto mb-4 animate-pulse-slow" />
                        <p className="text-gray-700 font-medium text-lg mb-2">
                            Haben Sie weitere Fragen?
                        </p>
                        <p className="text-gray-500 mb-6">
                            Zögern Sie nicht, mich zu kontaktieren. Ich nehme mir gerne Zeit für Sie.
                        </p>
                        <a href="#contact" className="text-cta font-medium hover:underline decoration-2 underline-offset-4">
                            Kontakt aufnehmen &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
