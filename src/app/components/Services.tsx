import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Globe, Smartphone, ShoppingCart, Zap, Database, Palette } from "lucide-react";
import { useInView } from "./hooks/useInView";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const Icon = service.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-xl transition-all"
      >
        <div style={{ transform: "translateZ(30px)" }}>
          <div className="mb-6 w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center group-hover:bg-accent transition-colors">
            <Icon className="w-7 h-7 text-accent-foreground" />
          </div>
          <h3 className="mb-4 text-[1.25rem] font-semibold tracking-[-0.015em] leading-[1.3]">{service.title}</h3>
          <p className="text-[0.9375rem] text-muted-foreground leading-[1.7] tracking-[-0.01em]">{service.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function Services() {
  const { ref, inView } = useInView();

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern frameworks, optimized for performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive interfaces that look stunning and function flawlessly on every device.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online stores with secure payments, inventory management, and analytics.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast load times that reduce bounce rates and improve search rankings.",
    },
    {
      icon: Database,
      title: "Seamless Data Sync",
      description: "Seamless connection with third-party services and custom backend development.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to maximize conversions and engagement.",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6 text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[1.1]">Our Services</h2>
          <p className="text-[1.125rem] md:text-[1.25rem] text-muted-foreground max-w-2xl mx-auto leading-[1.7] tracking-[-0.01em]">
            Comprehensive web development services tailored to your business needs
          </p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
