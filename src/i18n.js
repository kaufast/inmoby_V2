export function useTranslations(locale = "es") { // default to "es"
    let messages;
    try {
        messages = require(`./messages/${locale}.json`);
    } catch (error) {
        console.error(`Could not load translations for locale: ${locale}`, error);
        messages = require(`./messages/es.json`); // Fallback to Spanish if loading fails
    }
    return (key) => key.split('.').reduce((obj, k) => (obj ? obj[k] : key), messages);
}
