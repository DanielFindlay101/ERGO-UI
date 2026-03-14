import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "Components/Atoms/Badge",
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
    sharp: {
      control: "boolean",
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

export const Small: Story = {
  args: { children: "Small", size: "sm" },
};

export const Large: Story = {
  args: { children: "Large", size: "lg" },
};

export const SharpPrimary: Story = {
  args: { children: "Primary", sharp: true },
};

export const SharpSecondary: Story = {
  args: { children: "Secondary", variant: "secondary", sharp: true },
};

export const SharpTertiary: Story = {
  args: { children: "Tertiary", variant: "tertiary", sharp: true },
};

export const CustomColour: Story = {
  args: { children: "Custom", customColour: "#f97316" },
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

export const AllVariantsSharp: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="primary" sharp>
        Primary
      </Badge>
      <Badge variant="secondary" sharp>
        Secondary
      </Badge>
      <Badge variant="tertiary" sharp>
        Tertiary
      </Badge>
      <Badge variant="danger" sharp>
        Danger
      </Badge>
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

export const AllSizesSharp: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge size="sm" sharp>
        Small
      </Badge>
      <Badge size="md" sharp>
        Medium
      </Badge>
      <Badge size="lg" sharp>
        Large
      </Badge>
    </div>
  ),
};
