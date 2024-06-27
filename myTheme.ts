import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// const color = "cyan";
const color = "blue";
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: `{${color}.50}`,
      100: `{${color}.100}`,
      200: `{${color}.200}`,
      300: `{${color}.300}`,
      400: `{${color}.400}`,
      500: `{${color}.500}`,
      600: `{${color}.600}`,
      700: `{${color}.700}`,
      800: `{${color}.800}`,
      900: `{${color}.900}`,
      950: `{${color}.950}`,
    },
  },
});

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: ".p-dark",
  },
};
