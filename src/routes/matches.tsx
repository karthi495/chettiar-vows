import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/lib/profiles";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Sparkles, Eye, MapPin, Filter } from "lucide-react";

export const Route = createFileRoute("/matches")({
  head: () => ({
    meta: [
      { title: "Verified Matches — Chettiar Connect" },
      { name: "description", content: "Browse verified Chettiar matches with compatibility, horoscope and trust scores." },
    ],
  }),
  component: MatchesPage,
});

const tabs = [
  { id: "suggested", label: "Suggested", icon: Sparkles },
  { id: "verified", label: "Verified Only", icon: BadgeCheck },
  { id: "premium", label: "Premium", icon: Sparkles },
  { id: "nearby", label: "Nearby", icon: MapPin },
  { id: "viewed", label: "Recently Viewed", icon: Eye },
] as const;

function MatchesPage() {
  const [tab, setTab] = useState<typeof tabs[number]["id"]>("suggested");

  const list = profiles.filter(p => {
    if (tab === "verified") return p.verified.govt && p.verified.horoscope;
    if (tab === "premium") return p.premium;
    if (tab === "nearby") return p.state === "Tamil Nadu";
    return true;
  });

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="bg-royal text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Your Matches</div>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">Verified Profiles for You</h1>
          <p className="mt-2 text-primary-foreground/80 max-w-xl">
            Curated based on your preferences, horoscope and family values.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map(t => (
              <motion.button
                key={t.id}
                onClick={() => setTab(t.id)}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  tab === t.id
                    ? "bg-royal text-primary-foreground border-transparent shadow-luxe"
                    : "bg-card text-foreground border-gold/30 hover:border-gold"
                }`}
              >
                <t.icon className="h-3.5 w-3.5" /> {t.label}
              </motion.button>
            ))}
          </div>
          <Button variant="outline" className="border-gold/50 text-primary">
            <Filter className="h-4 w-4 mr-1.5" /> Filters
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <ProfileCard key={p.id} profile={p} index={i} />)}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
