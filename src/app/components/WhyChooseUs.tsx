import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const principles = [
  {
    title: "Understand the real goal",
    description:
      "We start by understanding what the page needs to help a customer do, like buy, enquire, sign up, or read more.",
  },
  {
    title: "Shape it so people do not get lost",
    description:
      "Layout, hierarchy, and content structure are designed together so the site stays easy to read across mobile and desktop.",
  },
  {
    title: "Leave you with something durable",
    description:
      "The build is handed over with clean patterns and practical support so updates stay calm instead of chaotic.",
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
              Why clients stay
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              The work is organized so the result helps your business look credible and win action.
            </h2>
            <p className="max-w-xl text-base leading-8 text-foreground/72 sm:text-lg">
              Good interfaces calm people down. They explain the offer quickly, stay consistent as the page grows, and make the next decision feel easy.
            </p>
          </motion.div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => {
              const spanClass = index === 0 ? "sm:col-span-2" : "";

              return (
                <motion.li
                  key={principle.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-[2rem] border border-border bg-card p-6 sm:p-7 ${spanClass}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-sm font-medium text-foreground/70">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">
                        {principle.title}
                      </h3>
                      <p className="max-w-2xl text-sm leading-7 text-foreground/72 sm:text-[15px]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
