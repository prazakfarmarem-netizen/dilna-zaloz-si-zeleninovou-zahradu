import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", note: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setLoading(true);

    const { error } = await supabase.from("registrations").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      note: form.note.trim() || null,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Chyba při odesílání",
        description: "Zkus to prosím znovu.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle2 className="w-16 h-16 text-leaf mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          Děkujeme za registraci!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Potvrzení jsme ti poslali na e-mail. Těšíme se na tebe na dílně!
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground font-medium">
          Jméno a příjmení *
        </Label>
        <Input
          id="name"
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Jan Novák"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium">
          E-mail *
        </Label>
        <Input
          id="email"
          type="email"
          required
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="jan@email.cz"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground font-medium">
          Telefon <span className="text-muted-foreground font-normal">(nepovinné)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          maxLength={20}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+420 123 456 789"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="note" className="text-foreground font-medium">
          Poznámka <span className="text-muted-foreground font-normal">(nepovinné)</span>
        </Label>
        <Textarea
          id="note"
          maxLength={500}
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          placeholder="Cokoliv, co bys nám chtěl/a říct předem..."
          rows={3}
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full h-14 rounded-full"
        disabled={loading}
      >
        {loading ? "Odesílám..." : "Rezervuj si místo"}
      </Button>
    </form>
  );
};

export default RegistrationForm;
