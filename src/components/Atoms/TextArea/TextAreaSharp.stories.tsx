import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextAreaSharp";

const meta = {
  title: "Components/Atoms/TextArea/Sharp",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    variant: "tertiary",
  },
};

export const WithError: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    disabled: true,
  },
};

export const AllVariants: Story = {
  args: { label: "", placeholder: "" },
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <TextArea
        label="Primary"
        placeholder="Enter your message..."
        variant="primary"
      />
      <TextArea
        label="Secondary"
        placeholder="Enter your message..."
        variant="secondary"
      />
      <TextArea
        label="Tertiary"
        placeholder="Enter your message..."
        variant="tertiary"
      />
    </div>
  ),
};
