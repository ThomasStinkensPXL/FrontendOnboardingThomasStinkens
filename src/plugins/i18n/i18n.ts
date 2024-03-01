import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import nl from './locales/nl.json'

enum Locale {
	EN = 'en-US',
	NL = 'nl-nl',
}

const messages = {
	[Locale.EN]: en,
	[Locale.NL]: nl,
}

const defaultLocale = Locale.EN

export const i18nPlugin = createI18n({
	messages,
	legacy: false,
	fallbackLocale: defaultLocale,
	locale: defaultLocale,
})
