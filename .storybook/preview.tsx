import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
    (Story, context) => {
      const isDark =
        !context.globals["theme"] || context.globals["theme"] === "dark";
      return (
        <div
          style={{
            background: isDark ? "#22242b" : "#f9fafb",
            minHeight: "100vh",
            minWidth: "100vw",
            padding: "2rem",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
