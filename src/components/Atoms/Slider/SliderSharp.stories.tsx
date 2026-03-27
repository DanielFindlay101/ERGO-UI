import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./SliderSharp";

const meta = {
  title: "Components/Atoms/Slider/Sharp",
  component: Slider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "tertiary"] },
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

export const Disabled: Story = {
  args: { label: "Volume", defaultValue: 60, disabled: true },
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
