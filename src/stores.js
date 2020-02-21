import { readable } from 'svelte/store';

import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

// export const dupa = readable('chuj');
export const controller = readable(new ScrollMagic.Controller());

 