import cat from './cat.json'
import es from './es.json'
import en from './en.json'
const lalalanguages = {
  en, cat, es
}
const defaultLocale = es
const messages = Object.assign(lalalanguages)
export { defaultLocale, messages }
