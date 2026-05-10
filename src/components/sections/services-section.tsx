import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-bold uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Pricing
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary md:text-sm">// Choose your tier</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Daily — $5",
              description: "24-hour full access. Test every module before committing.",
              direction: "top",
            },
            {
              title: "Monthly — $15",
              description: "30 days of premium. All modules, all updates, Discord support.",
              direction: "right",
            },
            {
              title: "Yearly — $60",
              description: "Best value. 365 days, early access to new features & priority support.",
              direction: "left",
            },
            {
              title: "Lifetime — $120",
              description: "One payment, forever. All future updates included for life.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-primary/40 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Tier 0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-bold uppercase text-foreground md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-base">{service.description}</p>
    </div>
  )
}