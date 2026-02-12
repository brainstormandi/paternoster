import type { Metadata, Viewport } from "next";
import { Comfortaa, Nunito_Sans } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa", display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const viewport: Viewport = {
    themeColor: "#059669",
};

export const metadata: Metadata = {
    title: "Psychotherapie Paternoster | St. Valentin & Online",
    description: "Marc Andrea Paternoster – Psychotherapeut in Ausbildung unter Supervision in St. Valentin. Einfühlsame Begleitung bei Stress, Angst, Depression & Krisen. Vereinbaren Sie jetzt Ihr Erstgespräch.",
    keywords: ["Psychotherapie St. Valentin", "Psychotherapeut St. Valentin", "Marc Andrea Paternoster", "Therapie", "Depression", "Angststörung", "Burnout", "Psychotherapie in Ausbildung unter Supervision", "Niederösterreich", "Amstetten", "Steyr"],
    authors: [{ name: "Marc Andrea Paternoster" }],
    creator: "Marc Andrea Paternoster",
    metadataBase: new URL("https://psychotherapie-paternoster.at"),
    openGraph: {
        type: "website",
        locale: "de_AT",
        url: "https://psychotherapie-paternoster.at",
        title: "Psychotherapie Paternoster | Ein geschützter Raum für Ihre Entwicklung",
        description: "Professionelle psychotherapeutische Begleitung in St. Valentin. Finden Sie neue Wege aus alten Mustern.",
        siteName: "Psychotherapie Paternoster",
        images: [
            {
                url: "/images/hero-paternoster.png", // Ensure this image is suitable for social sharing
                width: 1200,
                height: 630,
                alt: "Marc Andrea Paternoster - Psychotherapie Praxis",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    // Structured Data for Local SEO and AI Search (LocalBusiness)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Psychotherapie Paternoster",
        "image": "https://psychotherapie-paternoster.at/images/profile.jpg",
        "url": "https://psychotherapie-paternoster.at",
        "telephone": "+436801545576",
        "email": "praxis@psychotherapie-paternoster.at",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hauptplatz 1",
            "addressLocality": "St. Valentin",
            "postalCode": "4300",
            "addressCountry": "AT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.175591,
            "longitude": 14.538569
        },
        "medicalSpecialty": ["Psychotherapy", "Psychiatric"],
        "availableService": [
            {
                "@type": "MedicalTherapy",
                "name": "Einzeltherapie",
                "description": "Individuelle Psychotherapie für Erwachsene"
            },
            {
                "@type": "MedicalTherapy",
                "name": "Paartherapie",
                "description": "Therapeutische Begleitung für Paare"
            }
        ],
        "areaServed": [
            { "@type": "City", "name": "St. Valentin" },
            { "@type": "City", "name": "Steyr" },
            { "@type": "City", "name": "Amstetten" },
            { "@type": "City", "name": "Haag" },
            { "@type": "City", "name": "Enns" },
            { "@type": "AdministrativeArea", "name": "Bezirk Amstetten" },
            { "@type": "AdministrativeArea", "name": "Bezirk Linz-Land" }
        ],
        "knowsAbout": ["Depression", "Burnout", "Angststörung", "Panikattacken", "Lebenskrisen", "Persönlichkeitsentwicklung"],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "10:00",
            "closes": "22:00"
        },
        "priceRange": "€€",
        "description": "Psychotherapeut in Ausbildung unter Supervision in St. Valentin. Spezialisiert auf Depression, Ängste, Burnout und Persönlichkeitsentwicklung.",
        "founder": {
            "@type": "Person",
            "name": "Marc Andrea Paternoster"
        }
    };

    return (
        <html lang="de" className="smooth-scroll scroll-pt-24" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${comfortaa.variable} ${nunito.variable} antialiased bg-white text-gray-900`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
