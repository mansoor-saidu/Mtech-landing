import React from "react";
import { ArrowUpRight, MailCheck, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const caseStudies = [
  {
    title: "Email Verification for Products",
    category: "WordPress tool",
    description:
      "A lightweight WordPress tool that unlocks content only after a customer proves they made a purchase. It still works for guest checkout, so people do not need to create an account first.",
    highlight:
      "Best for digital rewards, gated downloads, and content people should only see after buying.",
    href: "https://github.com/mansoor-saidu/Email-Verification-for-Products",
    icon: ShieldCheck,
  },
  {
    title: "sendbyte-wp_mail",
    category: "WordPress tool",
    description: (
      <>
        A custom-built wp-mail wrapper that leverages{" "}
        <a
          href="https://sendbyte.africa/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="underline underline-offset-2 opacity-90 hover:opacity-100 transition-opacity"
        >
          Sendbyte
        </a>{" "}
        to send emails reliably from WordPress.
      </>
    ),
    highlight:
      "Replaces the default wp_mail() function with Sendbyte's delivery infrastructure — better open rates, less spam, full control.",
    href: "https://github.com/mansoor-saidu/sendbyte-wp_mail",
    icon: MailCheck,
  },
];

export function CaseStudies() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
            Case studies
          </p>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Business solutions built to solve specific problems cleanly.
          </h2>
          <p className="text-base leading-8 text-foreground/72 sm:text-lg">
            Beyond full sites and dashboards, we also build focused tools that help businesses protect content, handle email, and make customer journeys cleaner.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.a
            href={caseStudies[0].href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group flex min-h-full flex-col justify-between rounded-[2rem] border border-border bg-foreground p-7 text-background transition-colors hover:bg-foreground/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 sm:p-8"
          >
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-background/15 bg-background/10">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex min-h-9 items-center rounded-full border border-background/15 bg-background/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background/80">
                  {caseStudies[0].category}
                </span>
                <span className="inline-flex min-h-9 items-center rounded-full border border-background/15 bg-background/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background/80">
                  Customer access
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                  {caseStudies[0].title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-background/78 sm:text-base">
                  {caseStudies[0].description}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-background/15 pt-5">
              <p className="text-sm leading-7 text-background/78">
                {caseStudies[0].highlight}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">
                Open repository
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.a>

          <div className="grid gap-6">
            {caseStudies.slice(1).map((study, index) => {
              const Icon = study.icon;

              return (
                <motion.a
                  key={study.title}
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.08 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-[2rem] border border-border bg-card p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background">
                        <Icon className="h-5 w-5 text-foreground/70" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex min-h-9 items-center rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/55">
                            Business tool
                          </span>
                        </div>

                        <h3 className="text-2xl font-normal tracking-[-0.03em] text-foreground">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/72 sm:text-base">
                    {study.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-foreground/58">
                    {study.highlight}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
