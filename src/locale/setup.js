import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './en.json';
import pl from './pl.json';

export function setupLocale() {
    addMessages('en', en);
    addMessages('pl', pl);
    
    init({
        fallbackLocale: 'en',
        // initialLocale: getLocaleFromNavigator(),
    });
}
