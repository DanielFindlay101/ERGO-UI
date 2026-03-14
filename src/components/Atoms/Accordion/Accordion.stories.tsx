import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "Components/Atoms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    sharp: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "420px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent =
  "ERGO-UI is a component library built for high-performance interfaces. Each component is designed to be composable, accessible, and visually consistent.";

export const Default: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
  },
};

export const DefaultOpen: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    defaultOpen: true,
  },
};

export const Sharp: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    sharp: true,
  },
};

export const SharpOpen: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    sharp: true,
    defaultOpen: true,
  },
};

export const Secondary: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    variant: "secondary",
    defaultOpen: true,
  },
};

export const Tertiary: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    variant: "tertiary",
    defaultOpen: true,
  },
};

export const SharpSecondary: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    variant: "secondary",
    sharp: true,
    defaultOpen: true,
  },
};

export const SharpTertiary: Story = {
  args: {
    title: "What is ERGO-UI?",
    children: sampleContent,
    variant: "tertiary",
    sharp: true,
    defaultOpen: true,
  },
};

export const CustomColour: Story = {
  args: {
    title: "Custom Colour",
    children: sampleContent,
    customColour: "#f97316",
    defaultOpen: true,
  },
};

export const AllVariants: Story = {
  args: { title: "" },
  render: () => (
    <div className="flex flex-col gap-3 w-[420px]">
      <Accordion title="Primary" variant="primary" defaultOpen>
        {sampleContent}
      </Accordion>
      <Accordion title="Secondary" variant="secondary" defaultOpen>
        {sampleContent}
      </Accordion>
      <Accordion title="Tertiary" variant="tertiary" defaultOpen>
        {sampleContent}
      </Accordion>
    </div>
  ),
};

export const AllVariantsSharp: Story = {
  args: { title: "" },
  render: () => (
    <div className="flex flex-col gap-3 w-[420px]">
      <Accordion title="Primary" variant="primary" sharp defaultOpen>
        {sampleContent}
      </Accordion>
      <Accordion title="Secondary" variant="secondary" sharp defaultOpen>
        {sampleContent}
      </Accordion>
      <Accordion title="Tertiary" variant="tertiary" sharp defaultOpen>
        {sampleContent}
      </Accordion>
    </div>
  ),
};
