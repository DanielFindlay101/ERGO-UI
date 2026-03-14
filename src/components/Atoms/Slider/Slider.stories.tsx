import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";

const meta = {
  title: "Components/Atoms/Slider",
  component: Slider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "tertiary"] },
    sharp: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: "Volume", defaultValue: 60, variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Volume", defaultValue: 60, variant: "secondary" },
};

export const Tertiary: Story = {
  args: { label: "Volume", defaultValue: 60, variant: "tertiary" },
};

export const Sharp: Story = {
  args: { label: "Volume", defaultValue: 60, sharp: true },
};

export const SharpSecondary: Story = {
  args: { label: "Volume", defaultValue: 60, variant: "secondary", sharp: true },
};

export const SharpTertiary: Story = {
  args: { label: "Volume", defaultValue: 60, variant: "tertiary", sharp: true },
};

export const CustomColour: Story = {
  args: { label: "Volume", defaultValue: 60, customColour: "#f97316" },
};

export const SharpCustomColour: Story = {
  args: { label: "Volume", defaultValue: 60, customColour: "#f97316", sharp: true },
};

export const Disabled: Story = {
  args: { label: "Volume", defaultValue: 60, disabled: true },
};

export const WithSteps: Story = {
  args: { label: "Brightness (0–100)", defaultValue: 50, min: 0, max: 100, step: 10 },
};

export const AllVariants: Story = {
  args: { label: "" },
  render: () => (
    <div className="flex flex-col gap-6 w-[320px]">
      <Slider label="Primary" defaultValue={60} variant="primary" />
      <Slider label="Secondary" defaultValue={45} variant="secondary" />
      <Slider label="Tertiary" defaultValue={80} variant="tertiary" />
    </div>
  ),
};

export const AllSharpVariants: Story = {
  args: { label: "" },
  render: () => (
    <div className="flex flex-col gap-6 w-[320px]">
      <Slider label="Primary" defaultValue={60} variant="primary" sharp />
      <Slider label="Secondary" defaultValue={45} variant="secondary" sharp />
      <Slider label="Tertiary" defaultValue={80} variant="tertiary" sharp />
    </div>
  ),
};
