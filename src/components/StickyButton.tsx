import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const StickyButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRegistration = () => {
    document.getElementById("registrace")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-5 md:hidden"
        >
          <Button
            variant="hero"
            size="lg"
            className="h-14 px-8 rounded-full shadow-2xl"
            onClick={scrollToRegistration}
          >
            Rezervuj si místo
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyButton;
