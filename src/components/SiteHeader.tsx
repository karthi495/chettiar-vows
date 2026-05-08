import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/matches", label: "Matches" },
    { to: "/search", label: "Search" },
    { to: "/membership", label: "Membership" },
  ] as const;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass border-b border-gold/30"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-royal shadow-gold">
            <Heart className="h-5 w-5 text-gold" fill="currentColor" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-primary">Chettiar Connect</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Verified Matrimony</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden md:block">
            <Button variant="ghost" className="text-primary hover:bg-primary/5">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-royal text-primary-foreground hover:opacity-90 shadow-luxe">
              Register Free
            </Button>
          </Link>
          <button onClick={() => setOpen(o => !o)} className="md:hidden p-2">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-background/95 px-6 py-4 space-y-3">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="block text-sm font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/login" className="block text-sm font-medium text-primary" onClick={() => setOpen(false)}>Login</Link>
        </div>
      )}
    </motion.header>
  );
}
