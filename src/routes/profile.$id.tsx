import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProfile } from "@/lib/profiles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BadgeCheck, Heart, MapPin, GraduationCap, Briefcase, Phone, Mail, Shield,
  Sparkles, Calendar, Ruler, Star, MessageCircle, Video,
} from "lucide-react";

export const Route = createFileRoute("/profile/$id")({
  component: ProfileDetail,
});

function ProfileDetail() {
  const { id } = Route.useParams();
  const profile = getProfile(id);

  if (!profile) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-display text-4xl">Profile not found</h1>
          <Link to="/matches"><Button className="mt-6 bg-royal text-primary-foreground">Browse Matches</Button></Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const verifs = [
    { ok: profile.verified.mobile, label: "Mobile", icon: Phone },
    { ok: profile.verified.email, label: "Email", icon: Mail },
    { ok: profile.verified.govt, label: "Govt ID", icon: Shield },
    { ok: profile.verified.horoscope, label: "Horoscope", icon: Star },
  ];

  const details = [
    { icon: Calendar, l: "Age", v: `${profile.age} years` },
    { icon: Ruler, l: "Height", v: profile.height },
    { icon: MapPin, l: "Location", v: `${profile.city}, ${profile.state}` },
    { icon: GraduationCap, l: "Education", v: profile.education },
    { icon: Briefcase, l: "Profession", v: profile.profession },
    { icon: Sparkles, l: "Salary", v: profile.salary },
  ];

  const horoscope = [
    { l: "Sub Caste", v: profile.subCaste },
    { l: "Nakshatra", v: profile.nakshatra },
    { l: "Rasi", v: profile.rasi },
    { l: "Dosham", v: profile.dosham },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            <div className="overflow-hidden rounded-3xl border border-gold/30 shadow-luxe">
              <div className="relative aspect-[4/5]">
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
                {profile.premium && (
                  <Badge className="absolute top-4 left-4 bg-gold-gradient text-gold-foreground border-0">
                    <Sparkles className="h-3 w-3 mr-1" /> Premium Member
                  </Badge>
                )}
              </div>
              <div className="bg-card p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Trust Score</span>
                  <span className="font-display text-2xl text-gradient-gold font-semibold">{profile.trustScore}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-gold-gradient" style={{ width: `${profile.trustScore}%` }} />
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Profile Complete</span>
                  <span className="font-semibold text-primary">{profile.completion}%</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-card p-5">
              <h3 className="font-display text-lg mb-3">Verification Badges</h3>
              <div className="grid grid-cols-2 gap-3">
                {verifs.map(v => (
                  <div key={v.label} className={`flex items-center gap-2 rounded-lg border p-2.5 text-sm ${v.ok ? "border-gold/40 bg-gold/10" : "border-border bg-muted/40 opacity-60"}`}>
                    <v.icon className={`h-4 w-4 ${v.ok ? "text-primary" : "text-muted-foreground"}`} />
                    <span>{v.label}</span>
                    {v.ok && <BadgeCheck className="h-4 w-4 text-gold ml-auto" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-card">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold flex items-center gap-1">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified Profile · {profile.id}
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl mt-1 text-primary">{profile.name}</h1>
                  <p className="text-muted-foreground mt-1">{profile.age} yrs · {profile.height} · {profile.subCaste}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-primary">
                    <Heart className="h-5 w-5 fill-current" />
                    <span className="font-display text-3xl font-semibold">{profile.compatibility}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Compatibility</div>
                  <div className="mt-1 text-xs text-gold">Horoscope {profile.horoscope}/36</div>
                </div>
              </div>

              <p className="mt-5 text-foreground/80 italic border-l-2 border-gold pl-4">"{profile.bio}"</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-royal text-primary-foreground hover:opacity-90 shadow-luxe">
                  <Heart className="h-4 w-4 mr-1.5" /> Express Interest
                </Button>
                <Button variant="outline" className="border-primary text-primary">
                  <MessageCircle className="h-4 w-4 mr-1.5" /> Message
                </Button>
                <Button variant="outline" className="border-gold text-primary">
                  <Video className="h-4 w-4 mr-1.5" /> Video Call
                </Button>
              </div>
            </div>

            <Section title="Personal Details">
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map(d => (
                  <div key={d.l} className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary flex-shrink-0">
                      <d.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{d.l}</div>
                      <div className="text-sm font-medium">{d.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Horoscope & Caste">
              <div className="grid gap-3 sm:grid-cols-2">
                {horoscope.map(h => (
                  <div key={h.l} className="flex items-center justify-between rounded-lg bg-secondary/60 px-4 py-3">
                    <span className="text-sm text-muted-foreground">{h.l}</span>
                    <span className="text-sm font-semibold text-primary">{h.v}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Partner Expectations">
              <p className="text-sm text-foreground/80">
                Looking for a well-educated, family-oriented partner from a respected Chettiar family.
                Should value tradition, support career growth, and be open to living with extended family.
              </p>
            </Section>
          </div>
        </motion.div>
      </div>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-card">
      <h2 className="font-display text-2xl text-primary mb-4">{title}</h2>
      {children}
    </div>
  );
}
