import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck, Search, Shield, Sparkles, Star, Users, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/lib/profiles";
import heroImg from "@/assets/hero-couple.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chettiar Connect — Verified Chettiar Matrimony" },
      { name: "description", content: "Find your perfect Chettiar life partner. 100% verified profiles for Nattukottai, Devanga and Vellan Chettiar communities." },
      { property: "og:title", content: "Chettiar Connect — Verified Chettiar Matrimony" },
      { property: "og:description", content: "India's most trusted matrimony service for the Chettiar community." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Stats />
      <FeaturedMatches />
      <WhyUs />
      <SuccessStories />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Tamil Chettiar wedding couple" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3 w-3" /> Exclusively for the Chettiar Community
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
            Find Your Perfect <span className="text-gradient-gold italic">Chettiar</span> Life Partner
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl">
            Where heritage meets the heart. Every profile manually verified, every match made with care.
          </p>

          <SearchPanel />

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-gold" /> 100% Verified</div>
            <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-gold" /> Govt ID Checked</div>
            <div className="flex items-center gap-2"><Star className="h-5 w-5 text-gold fill-gold" /> 4.9 Rated</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SearchPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-10 glass rounded-2xl p-5 md:p-6 shadow-luxe"
    >
      <div className="grid gap-3 md:grid-cols-4">
        <Select label="I'm looking for" options={["Bride", "Groom"]} />
        <Select label="Age" options={["21–25", "25–30", "30–35", "35+"]} />
        <Select label="Sub Caste" options={["Any", "Nattukottai", "Devanga", "Vellan", "Beri"]} />
        <Link to="/matches">
          <Button size="lg" className="w-full h-full bg-royal hover:opacity-90 text-primary-foreground shadow-gold">
            <Search className="h-4 w-4 mr-2" /> Search Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="text-foreground">
      <label className="block text-[10px] uppercase tracking-[0.15em] text-primary mb-1">{label}</label>
      <select className="w-full rounded-lg border border-gold/40 bg-cream px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Stats() {
  const stats = [
    { v: "2.4 L+", l: "Verified Profiles" },
    { v: "85K+", l: "Successful Marriages" },
    { v: "150+", l: "Cities Worldwide" },
    { v: "98%", l: "Trust Score" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-gold/30 bg-card p-6 text-center shadow-card"
          >
            <div className="font-display text-4xl text-gradient-gold font-semibold">{s.v}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedMatches() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="ornament mb-3"><span className="text-xs uppercase tracking-[0.3em] text-gold">Premium</span></div>
      <h2 className="text-center font-display text-4xl md:text-5xl">Today's Featured Matches</h2>
      <p className="text-center mt-3 text-muted-foreground max-w-xl mx-auto">
        Hand-picked profiles from our community based on tradition, values and compatibility.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.slice(0, 6).map((p, i) => <ProfileCard key={p.id} profile={p} index={i} />)}
      </div>

      <div className="mt-10 text-center">
        <Link to="/matches">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Matches <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: BadgeCheck, t: "Verified Profiles", d: "Every profile passes a 5-step verification including Govt ID and horoscope check." },
    { icon: Heart, t: "AI Match Score", d: "Compatibility powered by tradition + modern algorithms." },
    { icon: Shield, t: "Privacy First", d: "Your photos and contact stay private until you choose to share." },
    { icon: Users, t: "Family Friendly", d: "Designed to involve parents and elders in the process." },
  ];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-4xl md:text-5xl">Why Families Trust Us</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl glass p-6 shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal text-gold">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const stories = [
    { c: "Lakshmi & Karthik", l: "Chennai · 2024", q: "We found each other within 3 weeks. The verification gave our families peace of mind." },
    { c: "Divya & Arvind", l: "Bangalore · 2024", q: "Beyond a website — Chettiar Connect treats every match like a family member." },
    { c: "Anitha & Vignesh", l: "Madurai · 2023", q: "Our horoscopes matched 32/36. Today we celebrate our first anniversary." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="ornament mb-3"><span className="text-xs uppercase tracking-[0.3em] text-gold">Stories</span></div>
      <h2 className="text-center font-display text-4xl md:text-5xl">Happily Married</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {stories.map((s, i) => (
          <motion.blockquote
            key={s.c}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-gold/30 bg-card p-7 shadow-card"
          >
            <div className="text-gold text-3xl font-display leading-none">"</div>
            <p className="text-sm text-foreground/85 italic mt-2">{s.q}</p>
            <footer className="mt-5 pt-4 border-t border-gold/20">
              <div className="font-display text-lg text-primary">{s.c}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-royal p-10 md:p-16 text-center text-primary-foreground shadow-luxe">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <h2 className="font-display text-4xl md:text-5xl">Begin Your Journey Today</h2>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
          Join thousands of Chettiar families who have found their perfect match with us.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/register"><Button size="lg" className="bg-gold-gradient text-gold-foreground hover:opacity-90 shadow-gold">Register Free</Button></Link>
          <Link to="/matches"><Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">Browse Matches</Button></Link>
        </div>
      </div>
    </section>
  );
}
