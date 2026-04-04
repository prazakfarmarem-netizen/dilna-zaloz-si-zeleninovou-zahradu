import { motion } from "framer-motion";
import { BookOpen, Shovel, Layers, LayoutGrid, Wrench } from "lucide-react";

const blocks = [
  { icon: BookOpen, title: "Základy", items: ["Principy přírodního pěstování", "Jak funguje zdravá zahrada", "Plánování výsadby"] },
  { icon: Shovel, title: "Praxe", items: ["Zakládání záhonů", "Výsev a výsadba", "Mulčování a údržba"] },
  { icon: Layers, title: "Půda & kompost", items: ["Jak poznat zdravou půdu", "Kompostování v praxi", "Výživa bez chemie"] },
  { icon: LayoutGrid, title: "Záhony bez rytí", items: ["No-dig metoda krok za krokem", "Vrstvení materiálů", "Praktická ukázka na místě"] },
  { icon: Wrench, title: "Dovednosti", items: ["Osevní kalendář", "Střídání plodin", "Společné výsadby"] },
];

const LearnSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
      >
        Co se naučíš
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <b.icon className="w-6 h-6 text-leaf" />
              <h3 className="font-heading text-lg font-semibold text-foreground">{b.title}</h3>
            </div>
            <ul className="space-y-2">
              {b.items.map((item, j) => (
                <li key={j} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-leaf mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LearnSection;
