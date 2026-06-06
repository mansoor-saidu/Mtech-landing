import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";

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
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@mtechit.com.ng",
      href: "mailto:hello@mtechit.com.ng",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "07055052039",
      href: "tel:07055052039",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Ilorin, Nigeria",
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-muted/30">
      <Toaster position="top-center" richColors />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="mb-6 text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[1.1]">Let's Build Something Great</h2>
          <p className="text-[1.125rem] md:text-[1.25rem] text-muted-foreground max-w-2xl mx-auto leading-[1.7] tracking-[-0.01em]">
            Ready to transform your digital presence? Get in touch and let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <h3 className="mb-10 text-[1.75rem] font-semibold tracking-[-0.02em] leading-[1.2]">Get In Touch</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-5 p-5 rounded-2xl hover:bg-card border border-transparent hover:border-border transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-[0.8125rem] text-muted-foreground mb-1 font-medium tracking-tight">{info.label}</div>
                      <div className="tracking-[-0.01em] font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/20">
              <h4 className="mb-3 text-[1.125rem] font-semibold tracking-[-0.015em] leading-[1.3]">Quick Response Guarantee</h4>
              <p className="text-[0.9375rem] text-muted-foreground leading-[1.7] tracking-[-0.01em]">
                We typically respond to all inquiries within 2 hours during business hours.
                Your project deserves our immediate attention.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-3 text-[0.9375rem] font-medium tracking-tight">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-input-background border border-border focus:border-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-[0.9375rem] tracking-[-0.005em]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-3 text-[0.9375rem] font-medium tracking-tight">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-input-background border border-border focus:border-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-[0.9375rem] tracking-[-0.005em]"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block mb-3 text-[0.9375rem] font-medium tracking-tight">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl bg-input-background border border-border focus:border-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all text-[0.9375rem] tracking-[-0.005em]"
                placeholder="Your Company Inc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-3 text-[0.9375rem] font-medium tracking-tight">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-5 py-3.5 rounded-xl bg-input-background border border-border focus:border-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all resize-none text-[0.9375rem] tracking-[-0.005em]"
                placeholder="Tell us about your project, timeline, and budget..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed font-medium tracking-tight"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Get in Touch
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
