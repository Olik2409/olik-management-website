import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Syne, Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/ui/MobileCtaBar";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: locale === "pl" ? "https://olikmanagement.com" : "https://olikmanagement.com/en",
      languages: {
        pl: "https://olikmanagement.com",
        en: "https://olikmanagement.com/en",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "pl" | "en")) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${syne.variable} ${interTight.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Header />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
            <MobileCtaBar />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
