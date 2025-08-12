import { getRequestConfig } from 'next-intl/server';
import { headers, cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Try to get locale from cookie first (user preference)
  const cookieStore = await cookies();
  let locale = cookieStore.get('locale')?.value;

  // If no cookie, detect from browser language
  if (!locale) {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language') || '';

    // German for Germany (de-DE, de), English for everything else
    locale = acceptLanguage.includes('de') ? 'de' : 'en';
  }

  // Ensure locale is valid
  if (!['en', 'de'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});
