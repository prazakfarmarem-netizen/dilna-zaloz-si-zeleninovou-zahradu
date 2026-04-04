import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";

const FinalCTASection = () => (
  <section id="registrace" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-3">
          Připoj se na dílnu
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Vyplň formulář a rezervuj si své místo. Ozvu se ti s potvrzením a dalšími detaily.
        </p>

        <RegistrationForm />
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
