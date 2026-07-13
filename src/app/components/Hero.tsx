import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Logo } from "./Logo";
import { projectsData } from "../data/projectsData";

export function Hero() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const featuredProject = projectsData.find((project) => project.slug === "tymly") ?? projectsData[0];

  useEffect(() => {
    setIsReady(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-6 pt-10 pb-20 sm:pt-14 lg:pt-20 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.10),transparent_32%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.0),rgba(255,255,255,0.28))] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_26%),linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.24))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl dark:bg-background/10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-16">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <Logo className="h-12 w-auto sm:h-14" />
            <div className="h-px flex-1 bg-border/70" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex min-h-10 items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              MTECH IT SOLUTIONS
            </span>
            <span className="inline-flex min-h-10 items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Digital solutions for growing businesses
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[0.92] tracking-[-0.035em] [text-wrap:balance] sm:text-6xl lg:text-[5.9rem]">
              Solutions that help business owners win more trust, enquiries, and sales.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-foreground/75 sm:text-xl">
              We turn your service into a page that explains what you do quickly, builds trust fast, and gives people a clear reason to contact you.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.button
              onClick={scrollToContact}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              See how we help
            </motion.button>

            <motion.button
              onClick={() => navigate("/projects")}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              View our work
              <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Plain language that sells the offer",
              "Built for phones, laptops, and real customers",
              "Focused on enquiries, sales, and trust",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" />
                <p className="text-sm leading-6 text-foreground/75">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: isReady ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-border bg-card p-4 sm:p-5">
            <div className="rounded-[1.5rem] border border-border bg-background p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Featured solution
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-border bg-muted/30">
                <img
                  src={featuredProject.heroImage}
                  alt={`${featuredProject.title} preview`}
                  className="aspect-[16/11] w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex min-h-9 items-center rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {featuredProject.category}
                  </span>
                  <span className="inline-flex min-h-9 items-center rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Built to solve a business problem
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-normal tracking-[-0.03em] text-foreground">
                    {featuredProject.title}
                  </h2>
                  <p className="text-sm leading-7 text-foreground/70">
                    {featuredProject.shortDescription}
                  </p>
                </div>

                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                >
                  Open solution
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:mt-4">
            {[
              "Clear enough for non-technical visitors",
              "Useful on mobile, where most customers start",
              "Strong enough to grow with your business",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card px-4 py-4">
                <p className="text-sm leading-7 text-foreground/75">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
