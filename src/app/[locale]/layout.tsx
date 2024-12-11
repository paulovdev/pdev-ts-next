import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import TopNav from "@/components/topNav/page";
import Nav from "@/components/nav/page";

import {setRequestLocale} from 'next-intl/server';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import "./globals.scss";



export const metadata: Metadata = {
  title: "paulovdev - portfolio",
  description: "Generated by create next app",
  icons: {
    icon: '/photo.webp',
  },
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid 
  setRequestLocale(locale);
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 

  return (
    <html lang={locale}>
      <body>
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