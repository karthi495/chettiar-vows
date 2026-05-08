import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProfileCard } from "@/components/ProfileCard";
import { profiles } from "@/lib/profiles";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/search")({
  component: SearchPage,
});

function SearchPage() {
  const [verified, setVerified] = useState(false);
  const list = verified ? profiles.filter(p => p.verified.govt && p.verified.horoscope) : profiles;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl text-primary">Advanced Search</h1>
        <p className="text-muted-foreground mt-2">Find your match by precise criteria.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-3xl border border-gold/30 bg-card p-6 shadow-card"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <Field label="Age Range" type="select" options={["21–25", "25–30", "30–35", "35+"]} />
            <Field label="Location" type="text" placeholder="Chennai" />
            <Field label="Education" type="select" options={["Any", "Bachelor's", "Master's", "Doctorate"]} />
            <Field label="Profession" type="text" placeholder="Engineer" />
            <Field label="Salary" type="select" options={["Any", "5–10 LPA", "10–25 LPA", "25+ LPA"]} />
            <Field label="Sub Caste" type="select" options={["Any", "Nattukottai", "Devanga", "Vellan", "Beri"]} />
            <Field label="Nakshatra" type="select" options={["Any", "Rohini", "Bharani", "Hastam", "Anusham"]} />
            <Field label="Rasi" type="select" options={["Any", "Mesha", "Rishabha", "Kanya", "Tula"]} />
            <Field label="Dosham" type="select" options={["Any", "No", "Mild", "Yes"]} />
            <Field label="Marital Status" type="select" options={["Never married", "Divorcee", "Widowed"]} />
            <Field label="Country" type="select" options={["India", "USA", "Singapore", "UK", "Australia"]} />
            <div className="flex items-end gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={verified} onChange={e => setVerified(e.target.checked)} className="h-4 w-4 accent-primary" />
                Verified only
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button className="bg-royal text-primary-foreground shadow-luxe">
              <Search className="h-4 w-4 mr-1.5" /> Search Matches
            </Button>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <ProfileCard key={p.id} profile={p} index={i} />)}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, type, options, placeholder }: { label: string; type: "select" | "text"; options?: string[]; placeholder?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</label>
      {type === "select" ? (
        <select className="mt-1 w-full rounded-lg border border-gold/40 bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
          {options?.map(o => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="mt-1 w-full rounded-lg border border-gold/40 bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      )}
    </div>
  );
}
