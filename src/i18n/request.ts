import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});