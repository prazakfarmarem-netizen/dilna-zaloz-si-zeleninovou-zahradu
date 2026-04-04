import { motion } from "framer-motion";
import { AlertCircle, Search, Frown } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Chaos informací",
    text: "Na internetu najdeš tisíce rad – ale které fungují pro tvoje podmínky?",
  },
  {
    icon: AlertCircle,
    title: "Chybějící systém",
    text: "Bez jasného plánu se ze zahrady stává zdroj stresu místo radosti.",
  },
  {
    icon: Frown,
    title: "Frustrace začátečníků",
    text: "Sázíš, zaléváš, a přesto nic neroste tak, jak by mělo.",
  },
];

const ProblemSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-12"
      >
        Znáš to?
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
              <p.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
