export const locales = ["fr", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "fr"

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/")
  const localeSegment = segments[1]
  if (locales.includes(localeSegment as Locale)) {
    return localeSegment as Locale
  }
  return defaultLocale
}
