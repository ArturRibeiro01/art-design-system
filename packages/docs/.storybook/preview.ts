import "@art-design-systems/react-components/index.css";
import type { Preview, Decorator } from "@storybook/react";
import { themes } from "@art-design-systems/react-components/styles/theme.css";

const withTheme: Decorator = (StoryFn) => {
  document.documentElement.className = themes.light;
  return StoryFn();
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Getting Started", "Atoms", "Molecules", "Organisms"],
      },
    },
  },
  decorators: [withTheme],
};

export default preview;