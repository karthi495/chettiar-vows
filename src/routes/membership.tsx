import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/membership")({
  head: () => ({ meta: [{ title: "Premium Membership — Chettiar Connect" }] }),
  component: MembershipPage,
});

const plans = [
  {
    name: "Free",
    price: "₹0",
    tag: "Get Started",
    features: ["Create profile", "Browse matches", "5 interests/month", "Basic search"],
  },
  {
    name: "Gold",
    price: "₹2,499",
    tag: "Most Popular",
    highlight: true,
    features: ["Unlimited interests", "View contact numbers", "Unlimited chat", "Horoscope access", "Priority support", "3 months validity"],
  },
  {
    name: "Platinum",
    price: "₹4,999",
    tag: "Premium",
    features: ["Everything in Gold", "Video calling", "WhatsApp connect", "Dedicated relationship manager", "Priority visibility", "6 months validity"],
  },
];

function MembershipPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <div className="ornament mb-3"><span className="text-xs uppercase tracking-[0.3em] text-gold">Membership</span></div>
          <h1 className="font-display text-4xl md:text-6xl">Choose Your Journey</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Upgrade to unlock premium features and find your match faster.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${p.highlight ? "bg-royal text-primary-foreground shadow-luxe scale-105" : "bg-card border border-gold/30 shadow-card"}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-gold-foreground text-xs px-3 py-1 rounded-full font-semibold">
                  {p.tag}
                </div>
              )}
              <div className="flex items-center gap-2">
                {p.name === "Platinum" ? <Crown className={`h-5 w-5 ${p.highlight ? "text-gold" : "text-primary"}`} /> :
                 p.name === "Gold" ? <Sparkles className={`h-5 w-5 ${p.highlight ? "text-gold" : "text-primary"}`} /> : null}
                <h3 className="font-display text-3xl">{p.name}</h3>
              </div>
              <div className="mt-2 font-display text-5xl font-semibold">{p.price}</div>
              <div className={`text-xs uppercase tracking-wider ${p.highlight ? "text-gold" : "text-muted-foreground"}`}>
                {p.name === "Free" ? "Forever" : "One-time"}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${p.highlight ? "text-gold" : "text-primary"}`} /> {f}
                  </li>
                ))}
              </ul>

              <Link to="/register" className="block mt-8">
                <Button className={`w-full py-6 ${p.highlight ? "bg-gold-gradient text-gold-foreground hover:opacity-90" : "bg-royal text-primary-foreground"}`}>
                  Choose {p.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
