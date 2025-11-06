import "../src/styles/tokens.css";
import "../src/styles/tokens-semantic.css";
import "../src/styles/global.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "arkem-base",
      values: [
        {
          name: "arkem-base",
          value: "var(--semantic-background-base)",
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;

