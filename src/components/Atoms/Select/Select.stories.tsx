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
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
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

export const Primary: Story = {
  args: { label: "Fruit", children: options, variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Fruit", children: options, variant: "secondary" },
};

export const Tertiary: Story = {
  args: { label: "Fruit", children: options, variant: "tertiary" },
};

export const AllVariants: Story = {
  args: { label: "", children: options },
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Select label="Primary" variant="primary">{options}</Select>
      <Select label="Secondary" variant="secondary">{options}</Select>
      <Select label="Tertiary" variant="tertiary">{options}</Select>
    </div>
  ),
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

export const SharpSecondary: Story = {
  args: { label: "Fruit", children: options, sharp: true, variant: "secondary" },
};

export const SharpTertiary: Story = {
  args: { label: "Fruit", children: options, sharp: true, variant: "tertiary" },
};

export const SharpWithError: Story = {
  args: { label: "Fruit", children: options, sharp: true, error: true },
};

export const SharpDisabled: Story = {
  args: { label: "Fruit", children: options, sharp: true, disabled: true },
};
