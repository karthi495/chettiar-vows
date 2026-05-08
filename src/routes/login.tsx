import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, Lock } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"mobile" | "email">("mobile");
  const [step, setStep] = useState<"input" | "otp">("input");

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-md px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-gold/30 bg-card p-8 shadow-luxe"
        >
          <div className="text-center mb-6">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-royal shadow-gold">
              <Heart className="h-6 w-6 text-gold" fill="currentColor" />
            </div>
            <h1 className="mt-4 font-display text-3xl text-primary">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign in to continue your journey</p>
          </div>

          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-secondary mb-5">
            <button
              onClick={() => { setMode("mobile"); setStep("input"); }}
              className={`flex items-center justify-center gap-1.5 py-2 text-sm rounded-lg transition ${mode === "mobile" ? "bg-card text-primary shadow-card font-semibold" : "text-muted-foreground"}`}
            >
              <Phone className="h-4 w-4" /> Mobile
            </button>
            <button
              onClick={() => { setMode("email"); setStep("input"); }}
              className={`flex items-center justify-center gap-1.5 py-2 text-sm rounded-lg transition ${mode === "email" ? "bg-card text-primary shadow-card font-semibold" : "text-muted-foreground"}`}
            >
              <Mail className="h-4 w-4" /> Email
            </button>
          </div>

          {step === "input" ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  {mode === "mobile" ? "Mobile Number" : "Email Address"}
                </label>
                <input
                  type={mode === "mobile" ? "tel" : "email"}
                  placeholder={mode === "mobile" ? "+91 98765 43210" : "you@example.com"}
                  className="mt-1 w-full rounded-lg border border-gold/40 bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <Button onClick={() => setStep("otp")} className="w-full bg-royal text-primary-foreground hover:opacity-90 shadow-luxe py-6">
                Send OTP
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Enter 6-digit OTP</label>
                <div className="mt-1 flex justify-between gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input
                      key={i}
                      maxLength={1}
                      className="h-12 w-12 rounded-lg border border-gold/40 bg-background text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Expires in 04:59</span>
                  <button className="text-primary font-semibold hover:text-gold">Resend OTP</button>
                </div>
              </div>
              <Button className="w-full bg-royal text-primary-foreground hover:opacity-90 shadow-luxe py-6">
                <Lock className="h-4 w-4 mr-1.5" /> Verify & Sign In
              </Button>
              <button onClick={() => setStep("input")} className="w-full text-xs text-muted-foreground">
                ← Change {mode === "mobile" ? "number" : "email"}
              </button>
            </div>
          )}

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
          </div>

          <Button variant="outline" className="w-full border-gold/40 py-6">
            <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8.2z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2.1v2.8C3.9 20.4 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.7 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1V7.1H2.1C1.4 8.6 1 10.2 1 12s.4 3.4 1.1 4.9l3.6-2.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1C17.5 2.2 15 1 12 1 7.7 1 3.9 3.6 2.1 7.1l3.6 2.8C6.6 7.4 9.1 5.4 12 5.4z"/></svg>
            Continue with Google
          </Button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/register" className="text-primary font-semibold hover:text-gold">Register Free</Link>
          </p>
        </motion.div>
      </div>
      <SiteFooter />
    </div>
  );
}
