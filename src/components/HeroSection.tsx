import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden.png";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("registrace")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-earth/60" />

      <div className="relative z-10 section-container text-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Založ si vlastní
          <br />
          zeleninovou zahradu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto mb-10 font-body leading-relaxed"
        >
          Pěstuj vlastní jídlo v souladu s přírodou – bez chaosu, bez chemie, s jistotou.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="hero"
            size="lg"
            className="h-14 px-10 rounded-full"
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

export default HeroSection;
