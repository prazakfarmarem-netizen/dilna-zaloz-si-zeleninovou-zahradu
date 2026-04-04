import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Co když bude pršet?",
    a: "Dopolední část probíhá v zázemí. Odpolední praxi přizpůsobíme podmínkám – pracujeme i v lehkém dešti (to je realita zahrady). V případě extrémního počasí program upravíme tak, aby sis vše stejně vyzkoušel/a.",
  },
  {
    q: "Co si vzít s sebou?",
    a: "Pohodlné oblečení do zahrady (klidně se ušpiníš), pevné boty a případně vlastní rukavice. Vše ostatní (nářadí, materiál) bude na místě.",
  },
  {
    q: "Je to pro začátečníky?",
    a: "Ano. Dílna je ideální pro ty, kteří už něco zkusili, ale chybí jim systém. Pokud začínáš úplně od nuly, taky to zvládneš – vše vysvětluju od základů.",
  },
  {
    q: "Musím mít vlastní zahradu?",
    a: "Nemusíš, ale je to velká výhoda. Ideální je, když už máš místo, kde budeš moct rovnou začít aplikovat to, co se naučíš.",
  },
  {
    q: "Co když nevím, co chci pěstovat?",
    a: "Od toho tu jsi. Během dílny si vybereš konkrétní plodiny pro svou sezónu i podmínky.",
  },
  {
    q: "Kolik nás bude?",
    a: "Max. 10–12 lidí. Malá skupina = prostor na tvoje konkrétní otázky.",
  },
  {
    q: "Dostanu nějaké materiály?",
    a: "Ano. Pracovní sešit, osevní kalendář a další podklady, které můžeš použít doma.",
  },
  {
    q: "Budu si moct nechat poradit ke své zahradě?",
    a: "Ano. Počítám s prostorem na dotazy i konkrétní situace.",
  },
  {
    q: "Je součástí jídlo?",
    a: "Ano. Domácí vegetariánský oběd, káva a čaj.",
  },
  {
    q: "Co když se nebudu moct zúčastnit?",
    a: "Místo můžeš převést na někoho jiného nebo se domluvíme individuálně. Každopádně mi dej co nejdřív vědět.",
  },
  {
    q: "Jak se tam dostanu bez auta?",
    a: "Vlakem do stanice Golčův Jeníkov město (cca hodina z Prahy), pak procházkou nebo můžu zajistit odvoz z/na nádraží (5 km).",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-10"
      >
        Časté dotazy
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-background rounded-lg border border-border px-5"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
