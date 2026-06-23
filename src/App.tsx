import { ServicesOverview } from "./components/ServicesOverview";
import { WhatWeBuild } from "./components/WhatWeBuild";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroVideo } from "./components/HeroVideo";
import { ProductField } from "./components/ProductField";
import { ProductBreakdown } from "./components/ProductBreakdown";
import { VideoShowcase } from "./components/VideoShowcase";
import { PlatformCanvas } from "./components/PlatformCanvas";
import { Capabilities } from "./components/Capabilities";
import { Metrics } from "./components/Metrics";
import { Industries } from "./components/Industries";
import { Deployments } from "./components/Deployments";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { ClaudeAssistant } from "./components/ClaudeAssistant";

export default function App() {
  return (
    <>
      <ClaudeAssistant />
      <Header />
      <main className="overflow-x-hidden">
        <HeroVideo />
        <ServicesOverview />
        <WhatWeBuild />
        <ProductField />
        <ProductBreakdown />
        <VideoShowcase />
        <PlatformCanvas />
        <Capabilities />
        <Metrics />
        <Industries />
        <Deployments />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
