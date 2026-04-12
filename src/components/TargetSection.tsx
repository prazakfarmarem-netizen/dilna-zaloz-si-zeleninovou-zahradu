import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Chceš pěstovat vlastní zeleninu, ale nevíš, kde začít",
  "Už jsi něco zkoušel/a, ale výsledky neodpovídají úsilí",
  "Hledáš funkční systém, ne další článek na internetu",
  "Záleží ti na přírodním přístupu bez chemie",
];

const highlight = "Chceš, aby to fungovalo i bez neustálého pletí a zalévání";

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
        className="bg-leaf-light border border-leaf/20 rounded-lg p-5 text-center"
      >
        <p className="text-primary font-semibold text-lg">👉 {highlight}</p>
      </motion.div>
    </div>
  </section>
);

export default TargetSection;
