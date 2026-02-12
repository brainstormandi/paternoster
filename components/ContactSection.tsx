"use client";

import { FiMapPin, FiMail, FiPhone, FiCalendar, FiArrowRight } from "react-icons/fi";

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8 animate-slide-up">
                        <span className="text-cta font-medium uppercase tracking-wider text-sm">Kontakt</span>
                        <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
                            Der erste Schritt zur <span className="text-gradient">Veränderung</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Vereinbaren Sie jetzt Ihr unverbindliches Erstgespräch.
                            Rufen Sie an oder schreiben Sie mir – ich melde mich zeitnah zurück.
                        </p>

                        <div className="grid gap-4 pt-4">
                            <a
                                href="tel:+436801545576"
                                className="group flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-cta bg-white hover:shadow-xl hover:shadow-cta/10 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-full bg-cta text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FiPhone className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-lg">Telefon</p>
                                        <p className="text-gray-500 font-light">+43 680 154 55 76</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-cta group-hover:text-white transition-all">
                                    <FiArrowRight />
                                </div>
                            </a>

                            <a
                                href="mailto:praxis@psychotherapie-paternoster.at"
                                className="group flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-cta bg-white hover:shadow-xl hover:shadow-cta/10 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-full bg-cta text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <FiMail className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-lg">E-Mail</p>
                                        <p className="text-gray-500 font-light">praxis@psychotherapie-paternoster.at</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-cta group-hover:text-white transition-all">
                                    <FiArrowRight />
                                </div>
                            </a>

                            <div className="group flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 bg-white hover:border-cta/50 transition-all duration-300">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-full bg-cta/10 text-cta flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-colors">
                                        <FiMapPin className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 text-lg">Adresse</p>
                                        <p className="text-gray-500 font-light">Hauptplatz 1, 4300 St. Valentin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-float lg:order-last order-first border-4 border-white">
                        {/* Map Placeholder with Style */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                            {/* Embed for St. Valentin, Hauptplatz 1 */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.682669389814!2d14.53856931589966!3d48.17559127922714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773af767770868b%3A0xe5427d111867c482!2sHauptplatz%201%2C%204300%20St.%20Valentin!5e0!3m2!1sde!2sat!4v1652876543210!5m2!1sde!2sat"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border-l-4 border-cta">
                            <div className="flex items-start gap-4">
                                <div className="bg-cta/10 p-3 rounded-xl text-cta mt-1">
                                    <FiCalendar className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-wide text-xs text-cta">Praxiszeiten</h4>
                                    <p className="font-medium text-gray-800 text-lg mb-1">Montag - Sonntag</p>
                                    <p className="text-gray-600 font-light text-base mb-2">10:00 - 22:00 Uhr</p>
                                    <p className="text-xs text-gray-400 italic">Termine nach Vereinbarung möglich</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
