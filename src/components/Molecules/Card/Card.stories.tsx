import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Components/Molecules/Card",
  component: Card,
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
  },
  decorators: [
    (Story) => (
      <div style={{ width: "420px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent =
  "ERGO-UI is a component library built for high-performance interfaces. Each component is designed to be composable, accessible, and visually consistent.";

export const Default: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    primaryLabel: "Confirm",
    ghostLabel: "Cancel",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "secondary",
    primaryLabel: "Confirm",
    ghostLabel: "Cancel",
  },
};

export const Tertiary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "tertiary",
    primaryLabel: "Confirm",
    ghostLabel: "Cancel",
  },
};

export const Sharp: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "primary",
    sharp: true,
    primaryLabel: "Confirm",
    ghostLabel: "Cancel",
  },
};

export const SharpSecondary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "secondary",
    sharp: true,
    primaryLabel: "Confirm",
    ghostLabel: "Cancel",
  },
};

export const SharpTertiary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "tertiary",
    sharp: true,
    primaryLabel: "Confirm",
    ghostLabel: "Cancel",
  },
};

export const AllVariants: Story = {
  args: { title: "" },
  render: () => (
    <div className="flex flex-col gap-3 w-[420px]">
      <Card
        title="Primary"
        variant="primary"
        primaryLabel="Confirm"
        ghostLabel="Cancel"
      >
        {sampleContent}
      </Card>
      <Card
        title="Secondary"
        variant="secondary"
        primaryLabel="Confirm"
        ghostLabel="Cancel"
      >
        {sampleContent}
      </Card>
      <Card
        title="Tertiary"
        variant="tertiary"
        primaryLabel="Confirm"
        ghostLabel="Cancel"
      >
        {sampleContent}
      </Card>
    </div>
  ),
};

export const AllVariantsSharp: Story = {
  args: { title: "" },
  render: () => (
    <div className="flex flex-col gap-3 w-[420px]">
      <Card
        title="Primary"
        variant="primary"
        sharp
        primaryLabel="Confirm"
        ghostLabel="Cancel"
      >
        {sampleContent}
      </Card>
      <Card
        title="Secondary"
        variant="secondary"
        sharp
        primaryLabel="Confirm"
        ghostLabel="Cancel"
      >
        {sampleContent}
      </Card>
      <Card
        title="Tertiary"
        variant="tertiary"
        sharp
        primaryLabel="Confirm"
        ghostLabel="Cancel"
      >
        {sampleContent}
      </Card>
    </div>
  ),
};
