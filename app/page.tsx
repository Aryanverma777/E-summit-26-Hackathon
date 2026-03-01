import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ScamCategories } from "@/components/ScamCategories";
import { SimulationLab } from "@/components/SimulationLab";
import { PreventionToolkit } from "@/components/PreventionToolkit";
import { FraudAlerts } from "@/components/FraudAlerts";
import { EmergencyHelp } from "@/components/EmergencyHelp";
import { AboutUs } from "@/components/AboutUs";
import { AIChatbot } from "@/components/AIChatbot";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Stats />
      <ScamCategories />
      <SimulationLab />
      <PreventionToolkit />
      <FraudAlerts />
      <EmergencyHelp />
      <AboutUs />
      <Footer />
      <AIChatbot />
    </main>
  );
}
