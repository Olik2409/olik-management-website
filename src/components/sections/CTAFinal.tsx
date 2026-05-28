"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Send, CalendarDays } from "lucide-react";

export function CTAFinal() {
  const t = useTranslations("cta_final");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    // Backend placeholder – replace with real API endpoint
    console.log("Form submission:", form);
    setSent(true);
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,160,69,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16">
          <SectionReveal><Badge>{t("badge")}</Badge></SectionReveal>
          <SectionReveal delay={0.1}>
            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              {t("headline")}{" "}
              <span style={{ color: "var(--color-accent)" }}>{t("headline2")}</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
              {t("subheadline")}
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Calendar embed placeholder */}
          <SectionReveal>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <CalendarDays size={18} style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t("or")}
                </span>
              </div>
              {/* Replace iframe src with your GoHighLevel calendar embed URL */}
              <div className="flex-1 rounded-xl bg-[var(--color-bg)] flex items-center justify-center min-h-[300px] border border-[var(--color-border-subtle)]">
                <div className="text-center">
                  <CalendarDays size={32} style={{ color: "var(--color-text-muted)", margin: "0 auto 12px" }} />
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Wklej tutaj iframe kalendarza GoHighLevel
                  </p>
                  <code className="text-xs text-[var(--color-text-muted)] opacity-60 mt-2 block">
                    {"<iframe src='https://api.leadconnectorhq.com/...' />"}
                  </code>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
              <div className="space-y-4">
                {(["name","company","email","phone"] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                      {t(`form_${field}`)}
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder={t(`form_${field}`)}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                    {t("form_message")}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                    placeholder={t("form_message")}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={sent}
                  className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-black transition-all duration-200 disabled:opacity-60"
                  style={{ background: "var(--color-accent)" }}
                >
                  <Send size={14} />
                  {sent ? "Wysłano!" : t("form_submit")}
                </button>

                <p className="text-xs text-center text-[var(--color-text-muted)]">
                  {t("form_note")}
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
