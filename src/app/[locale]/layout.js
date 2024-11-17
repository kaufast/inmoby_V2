// src/app/[locale]/layout.js
// src/app/[locale]/layout.js
import { useTranslations } from "../../i18n";

export default async function LocaleLayout({ children, params }) {
  const locale = params?.locale || "es"; // Safely access locale
  const t = useTranslations(locale); // Load translations based on locale

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
