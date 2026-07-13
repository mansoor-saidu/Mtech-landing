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
    <footer className="px-6 pb-10 pt-6 sm:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-border bg-card px-6 py-8 sm:px-8 sm:py-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-4">
              <Logo className="h-11 w-auto" />
              <p className="max-w-lg text-sm leading-7 text-foreground/68 sm:text-base">
                Building web products that are clear enough to trust and strong enough to keep working as the business grows.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-5 text-sm text-foreground/55 sm:flex sm:items-center sm:justify-between">
            <p>© {currentYear} MTECH IT Solutions. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Designed for speed, clarity, and trust.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
