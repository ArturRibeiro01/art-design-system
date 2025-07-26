import "../../react-components/src/index.css";
import type { Preview } from "@storybook/react";
import { themes } from "@art-design-systems/react-components/styles/theme.css";

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
        order: ['Getting Started', 'Atoms', 'Molecules', 'Organisms'],
      },
    },
  },
  decorators: [
    (StoryFn: React.ComponentType) => {
      document.documentElement.className = themes.light;
      return <StoryFn />;
    },
  ],
};

export default preview;