"use client";

import Image from "next/image";
import { FiCheckCircle, FiTrendingUp, FiActivity, FiUserCheck, FiShield, FiHeart } from "react-icons/fi";

export default function TherapyApproach() {
    const commonThems = [
        { icon: FiTrendingUp, title: "Stress & Burnout" },
        { icon: FiActivity, title: "Depression" },
        { icon: FiShield, title: "Ängste & Panik" },
        { icon: FiUserCheck, title: "Selbstwert" },
        { icon: FiHeart, title: "Beziehung & Bindung" },
        { icon: FiCheckCircle, title: "Lebenskrisen" },
    ];

    const specializations = [
        "Psychosen & paranoide Schizophrenie",
        "Substanzgebundene Abhängigkeiten",
        "Nicht-substanzgebundene Abhängigkeiten",
        "Zwangsstörungen, Zwangsgedanken, Kontrollzwang",
        "Trauma & Traumaaufarbeitung, PTBS, komplexe Traumata",
        "Persönlichkeitsstörungen, Emotionale Instabilität, schwierige Beziehungsmuster, Identitätsunsicherheit, Impulsivität",
        "Manische Episoden & Stimmungsschwankungen",
        "Essstörungen, Scham & Körperbildthemen",
        "Therapie auf Weisung & Täterarbeit",
        "Akute Krisen & Überforderung",
    ];

    return (
        <section id="therapy" className="py-32 bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-cta/10 text-cta font-medium text-base tracking-wide uppercase">
                            Schwerpunkte
                        </span>
                        <h2 className="text-5xl md:text-6xl font-display text-gray-900 leading-tight">
                            Komplexe Themen brauchen <span className="text-gradient">klare Strukturen</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Vieles, was heute weh tut, hatte früher eine Funktion. Wir schauen ohne Schuld darauf.<br />
                            Hier finden Sie meine thematischen Schwerpunkte.
                        </p>
                    </div>

                    {/* Common Themes Grid (Features - Top Level) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
                        {commonThems.map((theme, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-cta/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-cta group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-lg ring-1 ring-gray-100 group-hover:ring-cta/50 relative z-10">
                                    <theme.icon className="text-3xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="font-display text-lg md:text-xl text-gray-900 font-medium relative z-10 group-hover:text-cta transition-colors">
                                    {theme.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Deep Dive & Practice Image Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Specializations List */}
                        <div className="bg-gray-50 p-10 rounded-[3rem] shadow-inner relative overflow-hidden">
                            {/* Decorative backdrop */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

                            <h3 className="text-3xl font-display text-gray-900 mb-8 relative z-10">Spezialisierungen</h3>
                            <div className="space-y-4 relative z-10">
                                {specializations.map((spec, i) => (
                                    <div key={i} className="flex items-start gap-4 p-3 hover:bg-white/60 rounded-xl transition-colors">
                                        <div className="mt-2 w-2 h-2 rounded-full bg-cta flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed font-light text-lg">{spec}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Practice Visual */}
                        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/practice.jpg"
                                alt="Praxisraum für Psychotherapie in St. Valentin"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-10 text-white z-20">
                                <h4 className="text-3xl font-display mb-2 text-white">Ein sicherer Ort</h4>
                                <p className="text-white/80 font-light text-lg">
                                    Der Raum, in dem Veränderung möglich wird. Ruhig, diskret und professionell.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
