import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./BadgeSharp";

const meta = {
  title: "Components/Atoms/Badge/Sharp",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Tertiary: Story = {
  args: { children: "Tertiary", variant: "tertiary" },
};

export const AllVariants: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="tertiary">Tertiary</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};
