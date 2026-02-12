import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TherapyApproach from "@/components/TherapyApproach";
import FirstSessionInfo from "@/components/FirstSessionInfo";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <AboutSection />
            <TherapyApproach />
            <FirstSessionInfo />
            <FAQSection />
            <PricingSection />
            <BookingSection />
            <DownloadSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
