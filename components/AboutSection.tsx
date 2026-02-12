"use client";

import Image from "next/image";
import { FiHeart, FiUsers, FiCompass } from "react-icons/fi";

export default function AboutSection() {
    return (
        <section id="about" className="py-32 bg-gradient-to-br from-white via-accent/20 to-white relative overflow-hidden">
            {/* Decorative Aurora Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">

                        {/* Image Column */}
                        <div className="lg:col-span-5 relative order-2 lg:order-1">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl animate-float h-[500px] w-full">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Marc Andrea Paternoster - Psychotherapeut in Ausbildung unter Supervision"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60 mix-blend-overlay" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs glass-card hidden md:block">
                                <p className="font-display text-primary text-lg">"Ein Raum, in dem Entwicklung Zeit bekommt."</p>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-primary border border-primary/10 mb-4">
                                <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                                <span className="text-base font-medium tracking-wide uppercase">Über mich</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
                                Verstehen, warum wir an <span className="text-gradient">alten Mustern</span> festhalten.
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                                <p>
                                    Vieles, was heute weh tut, hatte früher eine Funktion – Schutz, Beruhigung, Halt. Der Mensch ist ein Tier der Wiederholung, selbst wenn das Muster längst nicht mehr hilft.
                                </p>
                                <p>
                                    In der Therapie schauen wir ohne Schuld darauf, woher diese Strategien kommen und entwickeln Wege, die zu Ihrem jetzigen Leben passen.
                                </p>
                            </div>

                            {/* Core Values */}
                            <div className="grid md:grid-cols-3 gap-6 pt-8">
                                {[
                                    { icon: FiHeart, title: "Warm", desc: "Empathische Begleitung" },
                                    { icon: FiUsers, title: "Klar", desc: "Verständliche Sprache" },
                                    { icon: FiCompass, title: "Direkt", desc: "Ehrliches Feedback" },
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                                        <item.icon className="text-3xl text-cta mb-3 group-hover:scale-110 transition-transform duration-300" />
                                        <h3 className="font-display text-xl text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-base text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Qualifications Card */}
                            <div className="mt-8 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-cta">
                                <p className="text-gray-700 text-base md:text-lg">
                                    <span className="text-cta font-bold block mb-1">Qualifikation</span>
                                    Psychotherapeut in Ausbildung unter Supervision – Ich arbeite eigenständig und werde von erfahrenen Therapeut:innen begleitet.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
