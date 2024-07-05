import en from '~/locales/en.json';
import ru from '~/locales/ru.json';

// export default defineNuxtPlugin(({ vueApp }) => {
//   const i18n = createI18n({
//     legacy: false,
//     globalInjection: true,
//     locale: "ru",
//     messages: {
//       en,
//       ru,
//     },
//   });

//   vueApp.use(i18n);
// });
export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: "ru",
  messages: {
    en,
    ru,
  },
}));
// export const i18n = createI18n({
//       legacy: false,
//       globalInjection: true,
//       locale: "ru",
//       messages: {
//         en,
//         ru,
//       }})