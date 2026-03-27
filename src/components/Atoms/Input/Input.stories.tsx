import type { Meta, StoryObj } from "@storybook/react";
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Input from "./Input";
import Button from "../Button/Button";

const meta = {
  title: "Components/Atoms/Input",
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

export const WithError: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    error: true,
  },
};

export const WithIconRight: Story = {
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

export const EmailIcon: Story = {
  args: {
    label: "First name",
    placeholder: "Email address",
    type: "email",
    icon: <EnvelopeIcon className="w-5 h-5" />,
    iconLeft: true,
  },
};

export const PasswordIcon: Story = {
  args: {
    label: "First name",
    placeholder: "Password",
    type: "password",
    icon: <KeyIcon className="w-5 h-5" />,
  },
};

export const WithIconError: Story = {
  args: {
    label: "First name",
    placeholder: "Username",
    icon: <UserIcon className="w-5 h-5" />,
    iconLeft: true,
    error: true,
  },
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
      <div className="flex items-stretch gap-2">
        <Input label="" placeholder="Enter text" variant="tertiary" />
        <Button variant="tertiary">Submit</Button>
      </div>
    </div>
  ),
};
