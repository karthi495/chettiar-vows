import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Heart,
  Eye,
  MessageCircle,
  Bell,
  Sparkles,
  Shield,
  Mail,
  Phone,
  FileCheck,
  Star,
  Settings,
  Edit3,
  TrendingUp,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProfileCard } from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { profiles } from "@/lib/profiles";
import bride1 from "@/assets/bride-1.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Dashboard — Chettiar Connect" },
      { name: "description", content: "Your matrimony dashboard — manage your profile, view matches, interests and messages." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-10">
        <ProfileHeader />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <StatsRow />
            <CompletionCard />
            <RecommendedMatches />
          </div>
          <div className="space-y-6">
            <VerificationCard />
            <ActivityCard />
            <QuickActions />
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl bg-royal p-6 md:p-8 text-primary-foreground shadow-luxe"
    >
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="relative">
          <img
            src={bride1}
            alt="Profile"
            className="h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-gold object-cover shadow-gold"
          />
          <div className="absolute -bottom-1 -right-1 grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground border-2 border-primary">
            <BadgeCheck className="h-5 w-5" fill="currentColor" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em]">
            <Sparkles className="h-3 w-3" /> Free Member
          </div>
          <h1 className="font-display text-3xl md:text-4xl mt-1">Welcome, Lakshmi</h1>
          <p className="text-primary-foreground/80 text-sm mt-1">
            Profile ID: CC1024 · Devanga Chettiar · Chennai
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge className="bg-gold/20 text-gold border border-gold/40">Mobile Verified</Badge>
            <Badge className="bg-gold/20 text-gold border border-gold/40">Email Verified</Badge>
            <Badge className="bg-gold/20 text-gold border border-gold/40">ID Verified</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
            <Edit3 className="h-4 w-4 mr-1" /> Edit
          </Button>
          <Button className="bg-gold-gradient text-gold-foreground hover:opacity-90">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function StatsRow() {
  const items = [
    { icon: Eye, label: "Profile Views", value: "1,284", trend: "+12%" },
    { icon: Heart, label: "Interests", value: "47", trend: "+5" },
    { icon: MessageCircle, label: "Messages", value: "23", trend: "Today" },
    { icon: Star, label: "Shortlists", value: "18", trend: "+3" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl border border-gold/30 bg-card p-5 shadow-card"
        >
          <div className="flex items-center justify-between">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-royal text-gold">
              <it.icon className="h-5 w-5" />
            </div>
            <span className="text-[10px] flex items-center gap-1 text-gold uppercase tracking-wider">
              <TrendingUp className="h-3 w-3" /> {it.trend}
            </span>
          </div>
          <div className="mt-3 font-display text-3xl text-primary">{it.value}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">{it.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

function CompletionCard() {
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl text-primary">Profile Strength</h3>
          <p className="text-sm text-muted-foreground">A complete profile gets 5x more matches</p>
        </div>
        <div className="text-gradient-gold font-display text-4xl font-semibold">85%</div>
      </div>
      <Progress value={85} className="mt-4 h-2" />
      <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
        <div className="flex items-center gap-2 text-foreground/80"><BadgeCheck className="h-4 w-4 text-gold" /> Basic info added</div>
        <div className="flex items-center gap-2 text-foreground/80"><BadgeCheck className="h-4 w-4 text-gold" /> Photos uploaded</div>
        <div className="flex items-center gap-2 text-foreground/80"><BadgeCheck className="h-4 w-4 text-gold" /> Horoscope verified</div>
        <div className="flex items-center gap-2 text-muted-foreground"><FileCheck className="h-4 w-4" /> Add partner preferences</div>
      </div>
    </div>
  );
}

function RecommendedMatches() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-2xl text-primary">Recommended For You</h3>
        <Link to="/matches" className="text-sm text-gold hover:text-primary">View all →</Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {profiles.slice(0, 4).map((p, i) => (
          <ProfileCard key={p.id} profile={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function VerificationCard() {
  const items = [
    { icon: Phone, label: "Mobile Number", done: true },
    { icon: Mail, label: "Email Address", done: true },
    { icon: Shield, label: "Govt ID", done: true },
    { icon: Star, label: "Horoscope", done: true },
  ];
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-card">
      <h3 className="font-display text-xl text-primary flex items-center gap-2">
        <BadgeCheck className="h-5 w-5 text-gold" /> Verification
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map(it => (
          <li key={it.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-foreground/85">
              <it.icon className="h-4 w-4 text-gold" /> {it.label}
            </span>
            {it.done ? (
              <Badge className="bg-gold/15 text-primary border border-gold/40">Verified</Badge>
            ) : (
              <Button size="sm" variant="outline">Verify</Button>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-xl bg-secondary/60 p-3 text-xs text-muted-foreground">
        Trust Score: <span className="font-semibold text-primary">98/100</span>
      </div>
    </div>
  );
}

function ActivityCard() {
  const events = [
    { icon: Eye, text: "Arvind viewed your profile", t: "2h ago" },
    { icon: Heart, text: "Karthik sent you an interest", t: "5h ago" },
    { icon: MessageCircle, text: "New message from Vignesh", t: "1d ago" },
    { icon: Star, text: "Divya shortlisted you", t: "2d ago" },
  ];
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-card">
      <h3 className="font-display text-xl text-primary flex items-center gap-2">
        <Bell className="h-5 w-5 text-gold" /> Recent Activity
      </h3>
      <ul className="mt-4 space-y-4">
        {events.map((e, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-primary flex-shrink-0">
              <e.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-foreground/90">{e.text}</div>
              <div className="text-xs text-muted-foreground">{e.t}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="rounded-2xl bg-royal p-6 text-primary-foreground shadow-luxe">
      <h3 className="font-display text-xl text-gold">Quick Actions</h3>
      <div className="mt-4 grid gap-2">
        <Link to="/search">
          <Button variant="outline" className="w-full justify-start border-gold/40 text-gold hover:bg-gold hover:text-gold-foreground">
            Advanced Search
          </Button>
        </Link>
        <Link to="/matches">
          <Button variant="outline" className="w-full justify-start border-gold/40 text-gold hover:bg-gold hover:text-gold-foreground">
            Browse Matches
          </Button>
        </Link>
        <Button variant="outline" className="w-full justify-start border-gold/40 text-gold hover:bg-gold hover:text-gold-foreground">
          Edit Preferences
        </Button>
      </div>
      <p className="mt-4 text-xs text-primary-foreground/70">
        🎉 All features are 100% free for our community.
      </p>
    </div>
  );
}
