import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-gold/30 bg-card p-8 md:p-10 shadow-luxe">
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-royal shadow-gold">
              <Heart className="h-6 w-6 text-gold" fill="currentColor" />
            </div>
            <h1 className="mt-4 font-display text-4xl text-primary">Begin Your Journey</h1>
            <p className="text-muted-foreground">Create your verified profile in 2 minutes.</p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Profile For" type="select" options={["Self", "Son", "Daughter", "Brother", "Sister"]} />
              <Input label="Gender" type="select" options={["Bride", "Groom"]} />
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Date of Birth" type="date" />
              <Input label="Sub Caste" type="select" options={["Nattukottai Chettiar", "Devanga Chettiar", "Vellan Chettiar", "Beri Chettiar"]} />
              <Input label="Mobile" placeholder="+91 ..." />
              <Input label="Email" placeholder="you@example.com" />
            </div>
            <Button className="w-full bg-royal text-primary-foreground py-6 shadow-luxe">
              Create My Free Profile
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Already a member? <Link to="/login" className="text-primary font-semibold">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
      <SiteFooter />
    </div>
  );
}

function Input({ label, type = "text", options, placeholder }: { label: string; type?: string; options?: string[]; placeholder?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</label>
      {type === "select" ? (
        <select className="mt-1 w-full rounded-lg border border-gold/40 bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
          {options?.map(o => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} placeholder={placeholder}
          className="mt-1 w-full rounded-lg border border-gold/40 bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
      )}
    </div>
  );
}
