import { motion } from "motion/react";
import { CheckCircle2, Clock, MousePointerClick, Users, Rocket, Heart } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function WhyChooseUs() {
  const { ref, inView } = useInView();

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "20+ successful projects delivered across diverse industries",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver quality work when promised",
    },
    {
      icon: MousePointerClick,
      title: "Designed for Ease",
      description: "Software your team can master in minutes. We build intuitive interfaces specifically for your staff's daily workflow, no complex training required.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Ongoing maintenance and support to keep your site running smoothly",
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "We build with your future in mind. Start with the core tools you need today, and easily add features as your business expands tomorrow.",
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our priority, from initial call to final deployment",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6 text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[1.1]">Why Choose us</h2>
          <p className="text-[1.125rem] md:text-[1.25rem] text-muted-foreground max-w-2xl mx-auto leading-[1.7] tracking-[-0.01em]">
            We build software that gives you full control and total peace of mind.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex gap-5 group"
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/50 flex items-center justify-center group-hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </motion.div>
                <div>
                  <h3 className="mb-3 text-[1.125rem] font-semibold tracking-[-0.015em] leading-[1.3] group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-[0.9375rem] text-muted-foreground leading-[1.7] tracking-[-0.01em]">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
