import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const clients = [
  {
    name: "Kwara State Signage Agency",
    logo: "/brandlogo/kwassaa.png",
    type: "Government Body",
  },
  {
    name: "Melbourne Restaurant",
    logo: "/brandlogo/melbourne.png",
    type: "Hospitality",
  },
  {
    name: "Boomlord Expert",
    logo: "/brandlogo/boomlord.png",
    type: "Subscriptions",
  },
];

export function ClientsBar() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="px-6 pb-4 sm:pb-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-border bg-card px-6 py-6 sm:px-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Left: Trust copy */}
            <div className="flex flex-col gap-1.5 md:max-w-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                Trusted by
              </p>
              <p className="font-serif text-xl font-normal leading-snug tracking-[-0.02em] text-foreground sm:text-2xl">
                Businesses that took their digital presence seriously.
              </p>
            </div>

            {/* Divider on desktop */}
            <div className="hidden h-16 w-px bg-border md:block" />

            {/* Centre: Client logos */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="group flex flex-col items-center gap-2"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-10 w-auto object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-foreground/40 group-hover:text-foreground/70 transition-colors">
                    {client.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider on desktop */}
            <div className="hidden h-16 w-px bg-border md:block" />

            {/* Right: WhatsApp pill */}
            <a
              href="https://wa.me/2347055052039"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#25D366]/30 bg-[#25D366]/8 px-5 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-foreground"
            >
              {/* WhatsApp icon */}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xs text-foreground/50 font-normal">Chat with us directly</span>
                <span className="font-semibold">WhatsApp us now</span>
              </span>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
