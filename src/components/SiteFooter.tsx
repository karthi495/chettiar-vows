import { Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-hero text-primary-foreground">
      <div className="mx-auto max-w-7xl grid gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient">
              <Heart className="h-5 w-5 text-primary" fill="currentColor" />
            </div>
            <div>
              <div className="font-display text-xl">Chettiar Connect</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Verified Matrimony</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            India's most trusted matrimony service exclusively for the Chettiar community.
          </p>
        </div>
        <div>
          <h4 className="text-gold mb-3 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/search">Advanced Search</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold mb-3 text-sm font-semibold uppercase tracking-wider">Community</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Nattukottai Chettiar</li>
            <li>Devanga Chettiar</li>
            <li>Vellan Chettiar</li>
            <li>Beri Chettiar</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold mb-3 text-sm font-semibold uppercase tracking-wider">Trust & Safety</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>100% Verified Profiles</li>
            <li>Govt ID Verification</li>
            <li>24x7 Support</li>
            <li>Privacy First</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Chettiar Connect. Crafted with tradition.
      </div>
    </footer>
  );
}
