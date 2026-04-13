import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarClock, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    const { error } = await supabase.from("interest_signups").insert({ email: email.trim() });

    fetch("https://hook.eu1.make.com/v0u8yhratoofredi35zkusubaiuw4r36", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "waitlist", email: email.trim(), name: name.trim() }),
    }).catch(() => {});

    setLoading(false);

    if (error) {
      toast({ title: "Chyba při odesílání", description: "Zkus to prosím znovu.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-leaf-light/50 border border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center">
              <CalendarClock className="w-6 h-6 text-leaf" />
            </div>
          </div>

          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Nehodí se ti tento termín?
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Přidej se na čekací listinu. Dám ti vědět o dalších termínech.
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-2">
            Pokud se ti aktuální termín nehodí, nech mi na sebe kontakt. Dám ti vědět, jakmile vypíšu další dílnu.
          </p>

          <p className="text-xs text-muted-foreground mb-8">
            Bez spamu. Jen informace k dalším termínům a souvisejícím novinkám.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-2 py-4"
            >
              <CheckCircle2 className="w-10 h-10 text-leaf" />
              <p className="text-foreground font-medium">
                Díky, jsi na seznamu. Dám ti vědět, jakmile vypíšu další termín.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jméno (nepovinné)"
                maxLength={100}
                className="bg-background rounded-full h-11 text-sm"
              />
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tvůj e-mail *"
                maxLength={255}
                className="bg-background rounded-full h-11 text-sm"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full h-12 rounded-full"
                disabled={loading}
              >
                {loading ? "Odesílám..." : "Chci vědět o dalších termínech"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
