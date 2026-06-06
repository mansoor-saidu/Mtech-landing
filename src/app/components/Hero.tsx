import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const rotatingWords = [
    "Drive Growth",
    "Solve Problems",
    "Disrupt Markets",
    "Build Trust",
    "Create Impact",
    "Drive Revenue",
    "Amplify Reach",
    "Streamline Operations",
    "Establish Credibility"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBackground = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const yOrbs = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <motion.div 
        style={{ y: yBackground, opacity: opacityBackground }}
        className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-secondary/30 pointer-events-none" 
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: yOrbs }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: yOrbs }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        {/* Growth Animation - Rising Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-2xl"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
              y: typeof window !== "undefined" ? window.innerHeight + 100 : 0,
              scale: 0.5,
              opacity: 0,
            }}
            animate={{
              y: -200,
              scale: [0.5, 1.2, 0.8, 1.5],
              opacity: [0, 0.4, 0.3, 0],
              x: [
                typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
                typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.8 : 0,
                typeof window !== "undefined" ? Math.random() * window.innerWidth * 0.6 : 0,
              ],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Expanding Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
            initial={{
              width: 50,
              height: 50,
              opacity: 0,
            }}
            animate={{
              width: [50, 800],
              height: [50, 800],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <motion.div style={{ y: yContent }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="mb-12 flex justify-center"
        >
          <Logo className="h-16 w-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
          className="mb-10 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium tracking-tight text-muted-foreground">Transforming Ideas into Digital Excellence</span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-semibold tracking-[-0.04em] leading-[0.95]"
        >
          {["Web", "Solutions", "That"].map((word, index) => (
            <motion.span key={index} className="inline-block mr-4" variants={letterVariants}>
              {word}
            </motion.span>
          ))}
          <motion.span variants={letterVariants} className="relative inline-flex whitespace-nowrap overflow-visible">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent pb-2 -mb-2"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="mb-14 text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] text-muted-foreground max-w-3xl mx-auto leading-[1.7] tracking-[-0.01em] font-normal"
        >
          We deliver custom web development that solves real business challenges.
          From concept to launch, we build digital experiences that convert visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-9 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 font-medium tracking-tight"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-9 py-4 border border-border rounded-xl hover:bg-card hover:shadow-lg transition-all backdrop-blur-sm font-medium tracking-tight"
          >
            View Services
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 pb-8 flex justify-center gap-3 text-[0.875rem]"
        >
          <div className="flex items-center gap-2.5 text-muted-foreground font-medium tracking-tight">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
            <span>Available for new projects</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
