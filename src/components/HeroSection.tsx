import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden.png";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
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
            onClick={scrollToRegistration}
          >
            Chci na dílnu
          </Button>
        </motion.div>
      </div>

      {/* Soft inverted U curve at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="w-full h-10 block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48 L0 12 Q300 -12 600 -12 Q900 -12 1200 12 L1200 48 Z"
            fill="hsl(40 33% 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
