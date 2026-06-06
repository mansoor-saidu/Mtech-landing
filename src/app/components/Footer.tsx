import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo className="h-12 w-auto" />
            <div className="text-[0.9375rem] text-muted-foreground text-center md:text-left font-medium tracking-tight">
              Building Digital Excellence
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-[0.875rem] text-muted-foreground font-medium tracking-tight">
          <p>© {currentYear} MTECH IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
