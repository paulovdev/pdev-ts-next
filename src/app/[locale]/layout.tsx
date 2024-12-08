import type { Metadata } from "next";
import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Locale, routing } from '@/i18n/routing';
import { ThemeProvider } from "@/context/ThemeContext";
import TopNav from "@/components/topNav/page";
import Nav from "@/components/nav/page";

import "./globals.scss";

export const metadata: Metadata = {
  title: "paulovdev - portfolio",
  description: "Generated by create next app",
  icons: {
    icon: '/photo.webp',
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="dark">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Nav />
            <TopNav />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
