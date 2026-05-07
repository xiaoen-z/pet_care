import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import PricingSection from "../components/PricingSection";
import ServicesSection from "../components/ServicesSection";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header styles={styles} />
      <main id="top">
        <HeroSection styles={styles} />
        <ServicesSection styles={styles} />
        <PricingSection styles={styles} />
        <ProcessSection styles={styles} />
        <ContactSection styles={styles} />
      </main>
      <Footer styles={styles} />
    </>
  );
}
