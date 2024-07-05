export const tailwindConfig = {
  config: {
    theme: {
      fontFamily: {
        Play: ["Play", "sans-serif"],
      },
      screens: {
        "3xl": "1600px",
        "2xl": "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "475px",
        xxs: "400px",
      },
    },
  },
};

export const googleFontsConfig = {
  families: {
    Play: [400, 500, 600, 700],
  },
};
export const primevueConfig = {
  usePrimeVue: true,
  importTheme: { from: "@/myTheme.ts" },
  options: {
    ripple: true,
    inputVariant: "filled",
  },
  components: {
    prefix: "Prime",
    include: ["Button", "Drawer", "InputText", "Password", "Select","MultiSelect","Textarea","FileUpload","Image","Galleria","Skeleton"],
  },
  directives: {
    include: ["Ripple", "Tooltip"],
  },
};
