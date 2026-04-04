import { motion } from "framer-motion";
import { BookOpen, Calendar, FileText, ClipboardCheck, MessageCircle } from "lucide-react";

const items = [
  { icon: BookOpen, title: "Pracovní sešit", desc: "Tištěný průvodce, do kterého si budeš během dne zapisovat" },
  { icon: Calendar, title: "Osevní kalendář", desc: "Přehledný plán výsevu a výsadby na celou sezónu" },
  
  { icon: FileText, title: "PDF materiály", desc: "Shrnutí dne a další podklady ke stažení" },
  { icon: MessageCircle, title: "Konzultace", desc: "Prostor pro tvoje otázky během celého dne" },
];

const DeliverablesSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
      >
        Co dostaneš
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-5 border-border text-center px-0 py-0 border-0 opacity-100"
          >
            <item.icon className="w-8 h-8 text-leaf mx-auto mb-3" />
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverablesSection;
