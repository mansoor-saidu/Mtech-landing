import { ThemeProvider } from "next-themes";
import React, { Suspense } from "react";
import { Hero } from "./components/Hero";
import { ThemeToggle } from "./components/ThemeToggle";

// Lazy load below-the-fold components for better initial load performance (LCP/FCP)
const Stats = React.lazy(() => import("./components/Stats").then(m => ({ default: m.Stats })));
const Services = React.lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const WhyChooseUs = React.lazy(() => import("./components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Contact = React.lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <Hero />
        <Suspense fallback={
          <div className="h-32 flex items-center justify-center opacity-50">
            <img src="/mtech-animation.gif" alt="Loading..." className="w-16 h-16 object-contain" />
          </div>
        }>
          <Stats />
          <Services />
          <WhyChooseUs />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </ThemeProvider>
  );
}
