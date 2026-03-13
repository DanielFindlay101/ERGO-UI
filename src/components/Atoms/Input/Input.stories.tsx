import type { Meta, StoryObj } from "@storybook/react";
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Input from "./Input";

const meta = {
  title: "Components/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sharp: {
      control: "boolean",
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
  },
};

export const WithError: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    error: true,
  },
};

export const Sharp: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    sharp: true,
  },
};

export const SharpWithError: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    sharp: true,
    error: true,
  },
};

export const SharpDisabled: Story = {
  args: {
    label: "First name",
    placeholder: "Enter text",
    sharp: true,
    disabled: true,
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

export const SharpWithIcon: Story = {
  args: {
    label: "First name",
    placeholder: "Search...",
    sharp: true,
    icon: <MagnifyingGlassIcon className="w-5 h-5" />,
  },
};

export const SharpWithIconLeft: Story = {
  args: {
    label: "First name",
    placeholder: "Search...",
    sharp: true,
    icon: <MagnifyingGlassIcon className="w-5 h-5" />,
    iconLeft: true,
  },
};
