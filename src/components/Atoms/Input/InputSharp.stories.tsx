import type { Meta, StoryObj } from "@storybook/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "./InputSharp";
import Button from "../Button/ButtonSharp";

const meta = {
  title: "Components/Atoms/Input/Sharp",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    error: {
      control: "boolean",
    },
    iconLeft: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    variant: "tertiary",
  },
};

export const WithError: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: "First name",
    placeholder: "Search...",
    icon: <MagnifyingGlassIcon className="w-5 h-5" />,
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "First name",
    placeholder: "Search...",
    icon: <MagnifyingGlassIcon className="w-5 h-5" />,
    iconLeft: true,
  },
};

export const AllVariants: Story = {
  args: { label: "", placeholder: "" },
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input label="Primary" placeholder="Enter text" variant="primary" />
      <Input label="Secondary" placeholder="Enter text" variant="secondary" />
      <Input label="Tertiary" placeholder="Enter text" variant="tertiary" />
    </div>
  ),
};

export const WithButtonPrimary: Story = {
  args: { label: "", placeholder: "" },
  render: () => (
    <div className="flex flex-col gap-1 w-[420px]">
      <span className="text-gray-800 dark:text-gray-300">Search</span>
      <div className="flex items-stretch gap-2">
        <Input label="" placeholder="Enter text" variant="primary" />
        <Button variant="primary">Submit</Button>
      </div>
    </div>
  ),
};
export const WithButtonSecondary: Story = {
  args: { label: "", placeholder: "" },
  render: () => (
    <div className="flex flex-col gap-1 w-[420px]">
      <span className="text-gray-800 dark:text-gray-300">Search</span>
      <div className="flex items-stretch gap-2">
        <Input label="" placeholder="Enter text" variant="secondary" />
        <Button variant="secondary">Submit</Button>
      </div>
    </div>
  ),
};
export const WithButtonTertiary: Story = {
  args: { label: "", placeholder: "" },
  render: () => (
    <div className="flex flex-col gap-1 w-[420px]">
      <span className="text-gray-800 dark:text-gray-300">Search</span>
      <Input label="" placeholder="Enter text" variant="tertiary" />
      <div className="flex items-stretch gap-2 justify-between mt-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="tertiary">Submit</Button>
      </div>
    </div>
  ),
};
