import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    fontBase: "var(--font-family-base)",
    fontCode: "var(--typography-mode-1-font-family-ibm-plex-sans)",
  }),
});

