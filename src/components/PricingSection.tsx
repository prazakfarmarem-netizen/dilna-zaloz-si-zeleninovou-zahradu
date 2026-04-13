import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, CalendarDays, AlertTriangle, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const PricingSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    const { error } = await supabase.from("interest_signups").insert({ email: email.trim() });

    // Notify owner via Make.com webhook (fire-and-forget)
    fetch("https://hook.eu1.make.com/v0u8yhratoofredi35zkusubaiuw4r36", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "interest", email: email.trim() }),
    }).catch(() => {});

    setLoading(false);

    if (error) {
      toast({ title: "Chyba při odesílání", description: "Zkus to prosím znovu.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
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

          {/* Interest signup */}
          <div className="mt-8 bg-sand/60 border border-border rounded-2xl p-5">
            <p className="text-sm text-foreground leading-relaxed mb-4">
              Nyní se nemohu zúčastnit, ale až budeš chystat další akce, chci to vědět jako první!
            </p>
            {submitted ? (
              <div className="flex items-center gap-2 justify-center text-leaf">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Díky! Dáme ti vědět.</span>
              </div>
            ) : (
              <form onSubmit={handleInterestSubmit} className="flex gap-2">
                <Input
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tvůj e-mail"
                  className="bg-background rounded-full text-sm h-10"
                />
                <Button
                  type="submit"
                  variant="hero"
                  className="rounded-full shrink-0 h-10 px-5 text-sm"
                  disabled={loading}
                >
                  {loading ? "..." : "Odeslat"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
