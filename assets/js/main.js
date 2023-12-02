import Alpine from 'alpinejs';

import exampleComp from 'js/components/exampleComp';
import { SOME_NUMBER, USER_LOCALE } from './config';

// import persist from '@alpinejs/persist';
// Alpine.plugin(persist);

// import focus from '@alpinejs/focus';
// Alpine.plugin(focus);

for (let [name, comp] of [
  ['exampleComp', exampleComp],
]) {
  Alpine.data(name, comp);
}

Alpine.store('fmt', {
  loc(el) {
    return el.toLocaleString(USER_LOCALE);
  },
});

Alpine.start();
