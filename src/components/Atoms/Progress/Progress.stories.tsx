import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";

const meta = {
  title: "Components/Atoms/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    type: { control: "select", options: ["bar", "circular"] },
    sharp: { control: "boolean" },
    showLabel: { control: "boolean" },
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 65, variant: "primary" },
};

export const Secondary: Story = {
  args: { value: 65, variant: "secondary" },
};

export const Tertiary: Story = {
  args: { value: 65, variant: "tertiary" },
};
export const Custom: Story = {
  args: { value: 65, variant: "tertiary" },
};

export const WithLabel: Story = {
  args: { value: 65, showLabel: true },
};

export const Sharp: Story = {
  args: { value: 65, sharp: true },
};

export const SharpSecondary: Story = {
  args: { value: 65, variant: "secondary", sharp: true },
};

export const SharpTertiary: Story = {
  args: { value: 65, variant: "tertiary", sharp: true },
};

export const SharpWithLabel: Story = {
  args: { value: 65, sharp: true, showLabel: true },
};

export const SmallSize: Story = {
  args: { value: 65, size: "sm", showLabel: true },
};

export const LargeSize: Story = {
  args: { value: 65, size: "lg", showLabel: true },
};

export const LowValue: Story = {
  args: { value: 10, showLabel: true },
};

export const Complete: Story = {
  args: { value: 100, showLabel: true },
};

export const AllBarVariants: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Progress value={65} variant="primary" showLabel />
      <Progress value={45} variant="secondary" showLabel />
      <Progress value={80} variant="tertiary" showLabel />
    </div>
  ),
};

export const AllBarSizes: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex flex-col gap-5 w-[320px]">
      <Progress value={65} size="sm" showLabel />
      <Progress value={65} size="md" showLabel />
      <Progress value={65} size="lg" showLabel />
    </div>
  ),
};

export const AllSharpVariants: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Progress label="Test" value={65} variant="primary" sharp showLabel />
      <Progress value={45} variant="secondary" sharp showLabel />
      <Progress value={80} variant="tertiary" sharp showLabel />
    </div>
  ),
};

export const CircularDefault: Story = {
  args: { value: 65, type: "circular", showLabel: true, label: "Test" },
};

export const CircularSecondary: Story = {
  args: { value: 65, type: "circular", variant: "secondary", showLabel: true },
};

export const CircularTertiary: Story = {
  args: { value: 65, type: "circular", variant: "tertiary", showLabel: true },
};

export const CircularSharp: Story = {
  args: { value: 65, type: "circular", sharp: true, showLabel: true },
};

export const AllCircularVariants: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex gap-6 items-center justify-center">
      <Progress
        value={65}
        type="circular"
        variant="primary"
        showLabel
        size="lg"
      />
      <Progress
        value={45}
        type="circular"
        variant="secondary"
        showLabel
        size="lg"
      />
      <Progress
        value={80}
        type="circular"
        variant="tertiary"
        showLabel
        size="lg"
      />
    </div>
  ),
};

export const AllCircularSizes: Story = {
  args: { value: 0 },
  render: () => (
    <div className="flex gap-6 items-center justify-center">
      <Progress value={65} type="circular" size="sm" showLabel />
      <Progress value={65} type="circular" size="md" showLabel />
      <Progress value={65} type="circular" size="lg" showLabel />
    </div>
  ),
};
