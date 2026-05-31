import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Syne, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/ui/MobileCtaBar";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL("https://olikmanagement.com"),
    title: {
      default: t("title"),
      template: "%s | Olik Management",
    },
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      siteName: "Olik Management",
      images: [{ url: "/images/brand/OLIK - szerszy.jpg", width: 1024, height: 320, alt: "Olik Management" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/brand/OLIK - szerszy.jpg"],
    },
    icons: {
      icon: "/images/brand/OLIK 1.jpg",
      apple: "/images/brand/OLIK 1.jpg",
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: locale === "pl" ? "https://olikmanagement.com" : "https://olikmanagement.com/en",
      languages: {
        pl: "https://olikmanagement.com",
        en: "https://olikmanagement.com/en",
        "x-default": "https://olikmanagement.com",
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
    <html lang={locale} className={`${syne.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <OrganizationSchema />
        <NextIntlClientProvider messages={messages}>
          <CursorGlow />
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
