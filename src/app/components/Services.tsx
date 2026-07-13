import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check, Database, Globe, Palette, ShoppingCart, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useInView } from "./hooks/useInView";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  outcome: string;
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Websites that explain clearly",
    description: "Custom websites that make your service, offer, or process easy to understand.",
    outcome: "Best for business sites, landing pages, and service pages.",
  },
  {
    icon: Smartphone,
    title: "Mobile-friendly layouts",
    description: "Pages that work cleanly on phones, where many first visits happen.",
    outcome: "Best when visitors will open the site on mobile.",
  },
  {
    icon: ShoppingCart,
    title: "Online stores that convert",
    description: "Shopping flows that help people move from browsing to buying with less confusion.",
    outcome: "Best for stores, subscriptions, and paid communities.",
  },
  {
    icon: Zap,
    title: "Faster loading pages",
    description: "Sharper load times and smoother browsing so people do not give up early.",
    outcome: "Best when slow pages are hurting enquiries or sales.",
  },
  {
    icon: Database,
    title: "Tools that connect to your systems",
    description: "Reliable connections to the services your team already uses every day.",
    outcome: "Best for dashboards, admin tools, and internal workflows.",
  },
  {
    icon: Palette,
    title: "Design that feels coherent",
    description: "Layouts and patterns that help the whole site feel consistent from page to page.",
    outcome: "Best for teams that want design and build in one place.",
  },
];

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" ref={ref} className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
            Capabilities
          </p>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            The work is shaped around clearer offers, more enquiries, and easier buying.
          </h2>
          <p className="text-base leading-8 text-foreground/72 sm:text-lg">
            You get a site or product surface that feels easy to use on day one and stays practical when content, traffic, and requirements change.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] bg-foreground p-8 text-background sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-background/15 bg-background/10">
              <Check className="h-5 w-5 text-background" />
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="max-w-md font-serif text-3xl font-normal leading-tight tracking-[-0.035em]">
                Built as one simple system, not a stack of confusing pages.
              </h3>
              <p className="max-w-xl text-base leading-8 text-background/80">
                Strategy, design, development, and launch support are handled together so the result feels consistent and easy for visitors to trust.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                "Clear structure that guides people toward action",
                "Responsive layouts that stay readable on phones",
                "Easy updates so the site does not become a burden",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-background/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-background/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/projects"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/30"
            >
              See examples
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2rem] border border-border bg-card"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`flex gap-4 px-5 py-5 sm:px-6 ${index !== services.length - 1 ? "border-b border-border" : ""} ${index === 0 ? "bg-muted/30" : ""}`}
                >
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                      <h3 className="text-lg font-medium tracking-[-0.02em] text-foreground">
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-foreground/72">
                      {service.description}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/58">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
