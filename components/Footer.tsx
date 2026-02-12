import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-12 relative overflow-hidden">
            {/* Aurora Footer Effect */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-display font-bold text-gray-900 inline-block">
                            Psychotherapie <span className="text-primary">Paternoster</span>
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-sm font-light text-lg">
                            Ein geschützter Raum für Ihre persönliche Entwicklung.<br />
                            Hauptplatz 1, 4300 St. Valentin
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="text-xl" />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FiInstagram className="text-xl" />
                            </a>
                            <a
                                href="mailto:praxis@psychotherapie-paternoster.at"
                                className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                aria-label="Email"
                            >
                                <FiMail className="text-xl" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-display font-bold text-gray-900 mb-6">Navigation</h4>
                        <ul className="space-y-4 font-light text-gray-600">
                            <li><Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Über mich</Link></li>
                            <li><Link href="#therapy" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Therapie & Schwerpunkte</Link></li>
                            <li><Link href="#process" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Ablauf & Kosten</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Häufige Fragen</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Kontakt</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-display font-bold text-gray-900 mb-6">Rechtliches</h4>
                        <ul className="space-y-4 font-light text-gray-600">
                            <li><Link href="/impressum" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Impressum</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Datenschutz</Link></li>
                            <li><Link href="/agb" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>AGB</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
                    <p>&copy; {currentYear} Marc Andrea Paternoster. Alle Rechte vorbehalten.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cta animate-pulse"></span>
                        Psychotherapeut in Ausbildung unter Supervision
                    </p>
                </div>
            </div>
        </footer>
    );
}
