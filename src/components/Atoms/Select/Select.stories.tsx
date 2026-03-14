import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Components/Atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sharp: { control: "boolean" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (
  <>
    <option value="">Select an option</option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
    <option value="date">Date</option>
  </>
);

export const Default: Story = {
  args: { label: "Fruit", children: options },
};

export const WithError: Story = {
  args: { label: "Fruit", children: options, error: true },
};

export const Disabled: Story = {
  args: { label: "Fruit", children: options, disabled: true },
};

export const Sharp: Story = {
  args: { label: "Fruit", children: options, sharp: true },
};

export const SharpWithError: Story = {
  args: { label: "Fruit", children: options, sharp: true, error: true },
};

export const SharpDisabled: Story = {
  args: { label: "Fruit", children: options, sharp: true, disabled: true },
};

export const CustomColour: Story = {
  args: { label: "Fruit", children: options, customColour: "#f97316" },
};

export const SharpCustomColour: Story = {
  args: { label: "Fruit", children: options, sharp: true, customColour: "#f97316" },
};
