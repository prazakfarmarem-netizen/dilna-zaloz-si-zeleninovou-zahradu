import { motion } from "framer-motion";
import { Sprout, Calendar, Lightbulb, Leaf, Heart, Hammer } from "lucide-react";

const results = [
  { icon: Sprout, text: "Budeš vědět, co a kdy zasít a zasadit" },
  { icon: Calendar, text: "Vytvoříš si vlastní osevní plán na celou sezónu" },
  { icon: Lightbulb, text: "Pochopíš principy, ne jen recepty" },
  { icon: Leaf, text: "Naučíš se pracovat s půdou, ne proti ní" },
  { icon Hammer, text: "Založíš záhon bez rytí – prakticky na místě" },
  { icon: Heart, text: "Odejdeš s jistotou a klidem, ne s dalšími otázkami" },
];

const ResultsSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
      >
        Co si odneseš
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 bg-background rounded-lg p-5"
          >
            <div className="w-10 h-10 rounded-full bg-leaf-light flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
