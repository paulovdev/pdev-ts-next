"use client";
import { useTranslations } from 'next-intl';

export const Translations = () => {
  const t = useTranslations();
  return { t };
};
