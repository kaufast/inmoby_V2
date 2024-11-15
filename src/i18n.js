export function useTranslations(locale = "es") {
    let messages;
    try {
        console.log(`Attempting to load translations for locale: ${locale}`);
        const fileName = locale === "en" ? "en.json" : "es.json"; // Map locales to specific files
        messages = require(`./messages/${fileName}`);
        console.log(`Successfully loaded translations for locale: ${locale}`);
    } catch (error) {
        console.error(`Could not load translations for locale: ${locale}`, error);
        try {
            console.log("Attempting to load fallback Spanish translations");
            messages = require(`./messages/es.json`); // Default to Spanish
            console.log("Successfully loaded fallback Spanish translations");
        } catch (fallbackError) {
            console.error("Could not load fallback Spanish translations", fallbackError);
            messages = {}; // Final fallback to an empty object
        }
    }
    return (key) =>
        key.split('.').reduce((obj, k) => (obj ? obj[k] : `Missing: ${key}`), messages);
}
