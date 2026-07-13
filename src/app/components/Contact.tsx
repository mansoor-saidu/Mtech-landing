import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { Toaster, toast } from "sonner";
import { useInView } from "./hooks/useInView";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mtechit.com.ng",
    href: "mailto:hello@mtechit.com.ng",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "07055052039",
    href: "tel:07055052039",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ilorin, Nigeria",
    href: "#",
  },
];

export function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully. We’ll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="px-6 py-16 sm:py-20 lg:py-24">
      <Toaster position="top-center" richColors />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Ready to turn a rough idea into something people actually remember?
          </h2>
          <p className="text-base leading-8 text-foreground/72 sm:text-lg">
            Tell us what you’re building, who it’s for, and what business result you want from it. We’ll help shape the clearest path to shipping it.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-7">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-foreground">
                Reach us directly
              </h3>
              <div className="mt-6 space-y-3">
                {contactInfo.map((info) => {
                  const Icon = info.icon;

                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-background px-4 py-4 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card">
                        <Icon className="h-5 w-5 text-foreground/70" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/45">
                          {info.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-foreground p-6 text-background sm:p-7">
              <h3 className="text-lg font-medium tracking-[-0.02em]">
                What to send in your first message
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "What the customer should understand in the first few seconds",
                  "What action you want them to take next",
                  "Any examples or websites you already like",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-background/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-background/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-background/75">
                Clear inputs help us reply with sharper ideas instead of generic estimates.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/45">
                  Project brief
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-foreground">
                  Start the conversation
                </h3>
              </div>
              <span className="hidden rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/55 sm:inline-flex">
                Reply within 24h
              </span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium tracking-tight text-foreground/80">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-[0.95rem] text-foreground transition-colors placeholder:text-foreground/35 focus:border-foreground/25 focus:outline-none focus:ring-2 focus:ring-foreground/10"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium tracking-tight text-foreground/80">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-[0.95rem] text-foreground transition-colors placeholder:text-foreground/35 focus:border-foreground/25 focus:outline-none focus:ring-2 focus:ring-foreground/10"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="company" className="mb-2 block text-sm font-medium tracking-tight text-foreground/80">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-[0.95rem] text-foreground transition-colors placeholder:text-foreground/35 focus:border-foreground/25 focus:outline-none focus:ring-2 focus:ring-foreground/10"
                placeholder="Your company or project name"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium tracking-tight text-foreground/80">
                Project details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={7}
                className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3.5 text-[0.95rem] text-foreground transition-colors placeholder:text-foreground/35 focus:border-foreground/25 focus:outline-none focus:ring-2 focus:ring-foreground/10"
                placeholder="Tell us what needs to be built, what business result you want, and what success should look like."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send inquiry"}
              <Send className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
