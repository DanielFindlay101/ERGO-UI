import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta = {
  title: "Components/Atoms/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sharp: true,
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};
export const Custom: Story = {
  args: {
    variant: "primary",
    className: "has-[:checked]:bg-cyan-500 outline-cyan-500",
  },
};
