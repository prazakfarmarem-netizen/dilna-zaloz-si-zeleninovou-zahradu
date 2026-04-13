import { motion } from "framer-motion";
import { GraduationCap, Leaf, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import petrPhoto from "@/assets/petr-portrait.jpg";

const trustPoints = [
  { icon: Sprout, text: "Lektor kompostování a pěstování se zaměřením na praktické a udržitelné postupy" },
  { icon: GraduationCap, text: "Vystudoval Udržitelnost a oběhové hospodářství na VŠCHT v Praze" },
  { icon: Leaf, text: "Pěstuje bez rytí půdy a pracuje s kompostem, sadbou i návrhem zahrady v praxi" },
];

const AboutSection = () => (
  <section className="section-padding bg-card">
    <div className="mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={petrPhoto}
            alt="Petr Jermář na zahradě"
            className="w-full rounded-2xl object-cover aspect-[3/4] shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Kdo tě dílnou provede
          </span>

          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-snug">
            Jmenuju se Petr Jermář a&nbsp;pomáhám lidem pěstovat vlastní jídlo v&nbsp;souladu s&nbsp;přírodou.
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Ne přes další chaos z internetu, ale přes srozumitelný systém, praxi a zkušenost z reálné zahrady. Ukazuju, jak si založit zeleninovou zahradu tak, aby dávala smysl, byla dlouhodobě udržitelná a člověka zbytečně nezahltila.
          </p>

          <div className="space-y-4">
            {trustPoints.map((tp, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-leaf-light flex items-center justify-center shrink-0 mt-0.5">
                  <tp.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{tp.text}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Jsem původem Pražák, který v sobě objevil lásku k rostlinám. Dnes buduju vlastní rodinou zahradu, pěstuju zeleninu a ovocné stromy, stavím zázemí pro pěstování a hledám cesty k větší potravinové soběstačnosti. Na dílně předávám to, co sám používám a co mi v praxi skutečně funguje.
          </p>

          <p className="text-foreground font-medium leading-relaxed">
            Tahle dílna není o teorii pro teorii. Je pro lidi, kteří chtějí pochopit souvislosti, získat jistotu a konečně si nastavit vlastní zahradu tak, aby fungovala v reálném životě.
          </p>

          <Button variant="hero" size="lg" className="rounded-full mt-2" asChild>
            <a href="#pricing">Chci na dílnu</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
