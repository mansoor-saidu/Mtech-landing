import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const proofPoints = [
  {
    value: "20+",
    label: "Projects delivered",
    description: "Built across e-commerce, portals, dashboards, and portfolio experiences.",
  },
  {
    value: "98%",
    label: "Client satisfaction",
    description: "Work that stays clear, maintainable, and easy to trust after launch.",
  },
  {
    value: "15+",
    label: "Repeat partners",
    description: "Teams come back when the first build becomes the new standard.",
  },
  {
    value: "24/7",
    label: "Support availability",
    description: "Launches matter most when the details are still moving.",
  },
];

export function Stats() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-border bg-card px-6 py-7 sm:px-8 sm:py-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                Proof of work
              </p>
              <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                Results that show what the work is meant to do for a business.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-foreground/68 sm:text-base">
              We design for teams that need the interface to do more than look good. It has to explain the offer clearly, move quickly, and support real enquiries and sales.
            </p>
          </div>

          <dl className="mt-8 grid overflow-hidden rounded-[1.5rem] border border-border md:grid-cols-4">
            {proofPoints.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-border bg-background px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <dt className="text-3xl font-normal tracking-[-0.04em] text-foreground sm:text-[2.15rem]">
                  {item.value}
                </dt>
                <dd className="mt-2 space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/45">
                    {item.label}
                  </p>
                  <p className="text-sm leading-7 text-foreground/72">
                    {item.description}
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
