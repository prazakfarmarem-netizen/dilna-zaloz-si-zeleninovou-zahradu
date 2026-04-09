import { motion } from "framer-motion";
import { Button } from "./ui/button";

const FinalCTASection = () => (
  <section id="registrace" className="section-padding">
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Button variant="hero" size="lg" className="text-xl px-12 py-8" asChild>
          <a
            href="https://www.fairplay.events/cs/zaloz-si-vlastni-zeleninovou-zahradu-2026-f99b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koupit vstupenku
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
