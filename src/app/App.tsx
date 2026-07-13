import { ThemeProvider } from "next-themes";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { ThemeToggle } from "./components/ThemeToggle";
import { Home } from "./pages/Home";

// Lazy load new pages
const ProjectsIndex = React.lazy(() => import("./pages/ProjectsIndex"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center opacity-50 bg-background">
            <img src="/mtech-animation.gif" alt="Loading..." className="w-16 h-16 object-contain" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </main>
    </ThemeProvider>
  );
}
