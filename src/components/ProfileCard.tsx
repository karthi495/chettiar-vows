import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, Heart, MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import type { Profile } from "@/lib/profiles";
import { Badge } from "@/components/ui/badge";

export function ProfileCard({ profile, index = 0 }: { profile: Profile; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={profile.photo}
          alt={profile.name}
          loading="lazy"
          width={640}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

        {profile.premium && (
          <Badge className="absolute top-3 left-3 bg-gold-gradient text-gold-foreground border-0 shadow-gold">
            <Sparkles className="h-3 w-3 mr-1" /> Premium
          </Badge>
        )}
        <div className="absolute top-3 right-3 glass-dark rounded-full px-3 py-1 text-xs text-gold flex items-center gap-1">
          <Heart className="h-3 w-3 fill-current" /> {profile.compatibility}%
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
          <div className="flex items-center gap-1 text-gold">
            <BadgeCheck className="h-4 w-4 fill-gold text-primary" />
            <span className="text-[10px] uppercase tracking-wider">Verified · Trust {profile.trustScore}</span>
          </div>
          <h3 className="font-display text-2xl mt-1">{profile.name}</h3>
          <p className="text-sm opacity-90">{profile.age} yrs · {profile.height} · {profile.subCaste}</p>
        </div>
      </div>

      <div className="p-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-gold" /> {profile.city}, {profile.state}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <GraduationCap className="h-4 w-4 text-gold" /> {profile.education}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Briefcase className="h-4 w-4 text-gold" /> {profile.profession} · {profile.salary}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gold/20">
          <div className="text-xs text-muted-foreground">ID: {profile.id}</div>
          <Link
            to="/profile/$id"
            params={{ id: profile.id }}
            className="text-xs font-semibold text-primary hover:text-gold transition-colors"
          >
            View Profile →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
