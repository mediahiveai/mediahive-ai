import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroVideo } from "./components/HeroVideo";
import { IntroSection } from "./components/IntroSection";
import { Metrics } from "./components/Metrics";
import { CorporateSection } from "./components/CorporateSection";
import { EnterpriseSection } from "./components/EnterpriseSection";
import { Divisions } from "./components/Divisions";
import { WhatWeBuild } from "./components/WhatWeBuild";
import { Industries } from "./components/Industries";
import { Deployments } from "./components/Deployments";
import { VideoShowcase } from "./components/VideoShowcase";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { FAQ } from "./components/FAQ";
import { CtaBanner } from "./components/CtaBanner";
import { Contact } from "./components/Contact";
import { ClaudeAssistant } from "./components/ClaudeAssistant";

export default function App() {
  return (
    <>
      <ClaudeAssistant />
      <Header />
      <main className="overflow-x-hidden">
        <HeroVideo />
        <IntroSection />
        <Metrics />
        <CorporateSection />
        <EnterpriseSection />
        <Divisions />
        <WhatWeBuild />
        <Industries />
        <Deployments />
        <VideoShowcase />
        <Testimonials />
        <Team />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
