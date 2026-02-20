"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Start" },
        { href: "#about", label: "Über mich" },
        { href: "#therapy", label: "Therapie" },
        { href: "#faq", label: "FAQ" },
        { href: "#pricing", label: "Preise" },
        { href: "#contact", label: "Kontakt" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4 md:py-5" : "bg-transparent py-5 md:py-8"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="#home" className={`text-xl sm:text-2xl md:text-3xl font-display font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                    Psychotherapie <span className="text-primary">Paternoster</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-lg font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-800'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        className="bg-cta text-white px-7 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-cta border-2 border-cta transition-all shadow-lg hover:shadow-cta/30 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Termin buchen
                    </a>
                </nav>

                {/* Mobile Menu Button - Visible on lg and below */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="xl:hidden text-3xl text-gray-800 hover:text-primary transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-white/95 backdrop-blur-xl shadow-lg animate-slide-down border-t border-gray-100 absolute top-full left-0 right-0 h-screen">
                    <nav className="flex flex-col p-8 gap-6 items-center pt-20">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl text-gray-800 hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-cta text-white px-8 py-4 rounded-full text-xl hover:bg-white hover:text-cta border-2 border-cta transition-all text-center shadow-lg font-medium mt-8 w-full max-w-xs"
                        >
                            Termin buchen
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
