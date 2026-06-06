import { useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { useInView } from "./hooks/useInView";

const AnimatedCounter = ({ value, inView }: { value: string; inView: boolean }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });

  useEffect(() => {
    if (inView) {
      spring.set(numericValue);
    }
  }, [inView, numericValue, spring]);

  const display = useTransform(spring, (current) => {
    // If it's a "24/7" string, we just bypass the number animation since it's a mixed string.
    // We could animate it if we parsed correctly, but we'll stick to full strings for "24/7".
    if (value === "24/7") return value;
    return Math.floor(current) + suffix;
  });

  if (value === "24/7") {
    return <motion.span>{value}</motion.span>;
  }

  return <motion.span>{display}</motion.span>;
};

export function Stats() {
  const { ref, inView } = useInView();

  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Repeat Partners" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-center group"
            >
              <motion.div
                className="text-[3.5rem] lg:text-[4rem] font-semibold mb-3 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent tracking-[-0.04em] leading-none"
                whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <AnimatedCounter value={stat.value} inView={inView} />
              </motion.div>
              <div className="text-[0.9375rem] lg:text-base text-muted-foreground font-medium tracking-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
