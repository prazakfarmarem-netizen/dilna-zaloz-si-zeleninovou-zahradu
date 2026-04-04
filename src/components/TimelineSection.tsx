import { motion } from "framer-motion";

const timeline = [
  { time: "10:00", label: "Příjezd a uvítání", desc: "Seznámení, káva, čaj, přehled dne" },
  { time: "10:30–12:30", label: "Teorie", desc: "Principy, plánování, půda, osevní plán" },
  { time: "12:30–14:00", label: "Oběd", desc: "Domácí vegetariánský oběd, volná diskuze" },
  { time: "14:00–17:00", label: "Praxe", desc: "Zakládání záhonů, výsev, mulčování, kompost" },
  { time: "17:00", label: "Závěr", desc: "Shrnutí, prostor na dotazy, předání materiálů" },
];

const TimelineSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
      >
        Průběh dne
      </motion.h2>

      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 md:gap-8 pl-0"
            >
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 md:w-13 md:h-13 rounded-full bg-leaf-light border-2 border-leaf flex items-center justify-center z-10 relative">
                  <span className="text-xs md:text-sm font-semibold text-primary">{i + 1}</span>
                </div>
              </div>
              <div className="pb-2">
                <p className="text-sm font-semibold text-leaf mb-1">{t.time}</p>
                <h3 className="font-heading text-lg font-semibold text-foreground">{t.label}</h3>
                <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
