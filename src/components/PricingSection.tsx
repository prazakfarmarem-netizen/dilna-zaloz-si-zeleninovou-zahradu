import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, CalendarDays, AlertTriangle } from "lucide-react";

const PricingSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registrace")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-10"
        >
          Cena a termín
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 md:p-10 max-w-lg mx-auto text-center"
        >
          <p className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
            2 480 Kč
          </p>
          <p className="text-muted-foreground mb-6">za celý den včetně oběda a materiálů</p>

          <div className="space-y-3 text-left mb-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-leaf shrink-0" />
              <span className="text-foreground">Termín: <strong>sobota 25. 4. 2026</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-leaf shrink-0" />
              <span className="text-foreground">Kapacita: <strong>10–12 lidí</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center mb-6 text-warm">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-semibold text-sm">Kapacita omezená – počet míst se nebude navyšovat</span>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="w-full h-14 rounded-full"
            asChild
          >
            <a href="https://www.fairplay.events/cs/zaloz-si-vlastni-zeleninovou-zahradu-2026-f99b" target="_blank" rel="noopener noreferrer">
              Koupit vstupenku
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
