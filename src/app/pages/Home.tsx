import React, { Suspense } from "react";
import { Hero } from "../components/Hero";
import { ClientsBar } from "../components/ClientsBar";

// Lazy load below-the-fold components
const Stats = React.lazy(() => import("../components/Stats").then(m => ({ default: m.Stats })));
const CaseStudies = React.lazy(() => import("../components/CaseStudies").then(m => ({ default: m.CaseStudies })));
const Services = React.lazy(() => import("../components/Services").then(m => ({ default: m.Services })));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Contact = React.lazy(() => import("../components/Contact").then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import("../components/Footer").then(m => ({ default: m.Footer })));

export function Home() {
  return (
    <>
      <Hero />
      <ClientsBar />
      <Suspense fallback={
        <div className="h-32 flex items-center justify-center opacity-50">
          <img src="/mtech-animation.gif" alt="Loading..." className="w-16 h-16 object-contain" />
        </div>
      }>
        <Stats />
        <CaseStudies />
        <Services />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
