import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./ToggleSharp";

const meta = {
  title: "Components/Atoms/Toggle/Sharp",
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
  args: {},
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
