import { motion } from "framer-motion";
import { MapPin, Train } from "lucide-react";
import gardenPhoto from "@/assets/garden-photo.png";

const LocationSection = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-10"
      >
        Kde se potkáme
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-leaf mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Golčův Jeníkov, Vysočina</p>
              <p className="text-muted-foreground text-sm mt-1">
                Přesná adresa bude zaslána po registraci.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Train className="w-5 h-5 text-leaf mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Doprava</p>
              <p className="text-muted-foreground text-sm mt-1">
                Vlakem do stanice Golčův Jeníkov město (cca hodina z Prahy). Odvoz z/na nádraží (5 km) je možné zajistit.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-border aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20712.35!2d15.47!3d49.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c9a1c0c0b0001%3A0x400af0f6614e980!2sGol%C4%8D%C5%AFv%20Jen%C3%ADkov!5e0!3m2!1scs!2scz!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - Golčův Jeníkov"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <img
          src={gardenPhoto}
          alt="Zeleninová zahrada"
          className="w-3/4 rounded-2xl object-cover max-h-[500px]"
        />
        <p className="mt-3 text-sm text-[hsl(30,30%,40%)] italic">Naše rodinná farma, červen 2025</p>
      </div>
    </div>
  </section>
);

export default LocationSection;
