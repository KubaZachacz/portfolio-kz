import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
import {
  getLanguage,
  setLanguage,
  setLanguageOption
} from "../utils/languageHandlers";
import en from "./en.json";
import pl from "./pl.json";

export function setupLocale(value) {
  addMessages("en", en);
  addMessages("pl", pl);

  let initialLocale = "en";
  if (!value) {
    const savedLocale = getLanguage();
    if (savedLocale) initialLocale = savedLocale;
    else {
      initialLocale = getLocaleFromNavigator();
      if (initialLocale.includes("en")) initialLocale = "en";
      else if (initialLocale.includes("pl")) initialLocale = "pl";
      setLanguage(initialLocale);
      setLanguageOption(initialLocale);
    }
  } else {
    initialLocale = value;
  }

  init({
    fallbackLocale: "en",
    initialLocale: initialLocale
  });
}
