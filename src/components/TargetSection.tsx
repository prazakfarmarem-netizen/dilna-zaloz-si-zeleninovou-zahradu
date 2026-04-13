import { motion } from "framer-motion";
import { Check } from "lucide-react";
import tomatoHarvest from "@/assets/tomato-harvest.jpeg";

const items = [
  "Chceš pěstovat vlastní zeleninu, ale nevíš, kde začít",
  "Už jsi něco zkoušel/a, ale výsledky neodpovídají úsilí",
  "Hledáš funkční systém, ne další článek na internetu",
  "Záleží ti na přírodním přístupu bez chemie",
];

const TomatoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="hsl(0 65% 48%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c-1.5-2-4-2-4-2s0 2.5 1 3.5" stroke="hsl(145 35% 32%)" />
    <path d="M12 4c1.5-2 4-2 4-2s0 2.5-1 3.5" stroke="hsl(145 35% 32%)" />
    <path d="M12 5c-4 0-7 3.5-7 7.5S8 21 12 21s7-4 7-8.5S16 5 12 5z" fill="hsl(0 65% 48%)" stroke="hsl(0 65% 40%)" />
    <path d="M12 5c-1 0-2 .5-2.5 1.5S9 9 10 10" stroke="hsl(0 50% 60%)" strokeWidth="1" opacity="0.5" />
  </svg>
);

const WateringCanOffIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="hsl(30 8% 55%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18h8a3 3 0 003-3v-4a1 1 0 00-1-1H8a1 1 0 00-1 1v4a3 3 0 003 3z" fill="hsl(30 8% 85%)" stroke="hsl(30 8% 55%)" />
    <path d="M10 10V7a2 2 0 012-2h0a2 2 0 012 2v3" />
    <path d="M18 10l2-3" />
    <path d="M18 7l1.5-.5" />
    <line x1="3" y1="3" x2="21" y2="21" stroke="hsl(0 65% 48%)" strokeWidth="2" />
  </svg>
);

const highlights = [
  { text: "Chceš si již toto léto vychutnat plody své zahrady", Icon: TomatoIcon },
  { text: "Chceš, aby to fungovalo i bez neustálého pletí a zalévání", Icon: WateringCanOffIcon },
];

const TargetSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-10"
      >
        Pro koho je dílna
      </motion.h2>

      <div className="space-y-4 mb-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <Check className="w-5 h-5 text-leaf mt-0.5 shrink-0" />
            <span className="text-foreground leading-relaxed">{item}</span>
          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-leaf/10 border border-leaf/30 rounded-lg p-5 space-y-3"
      >
        {highlights.map(({ text, Icon }, i) => (
          <div key={i} className="flex items-start gap-3">
            <Icon />
            <p className="text-foreground font-semibold text-lg leading-relaxed">{text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 max-w-md mx-auto"
      >
        <img
          src={tomatoHarvest}
          alt="Úroda rajčat ze zahrady"
          className="w-full rounded-2xl object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default TargetSection;
