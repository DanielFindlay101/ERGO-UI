import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import {
  PlusIcon,
  ArrowRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    sharp: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "md",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    variant: "tertiary",
    size: "md",
  },
};
export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "Add Item",
    variant: "primary",
    icon: <PlusIcon className="w-5 h-5" />,
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    children: "Continue",
    variant: "primary",
    icon: <ArrowRightIcon className="w-5 h-5" />,
    iconPosition: "right",
  },
};

export const DangerWithIcon: Story = {
  args: {
    children: "Delete",
    variant: "danger",
    icon: <TrashIcon className="w-5 h-5" />,
    iconPosition: "left",
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Add",
    variant: "primary",
    icon: <PlusIcon className="w-5 h-5" />,
    children: null,
  },
};

export const SharpPrimary: Story = {
  args: {
    children: "Play Free Now",
    variant: "primary",
    size: "md",
    sharp: true,
  },
};

export const SharpSecondary: Story = {
  args: {
    children: "Play Free Now",
    variant: "secondary",
    size: "md",
    sharp: true,
  },
};

export const SharpDanger: Story = {
  args: {
    children: "Play Free Now",
    variant: "danger",
    size: "md",
    sharp: true,
  },
};

export const SharpWithIcon: Story = {
  args: {
    children: "Play Free Now",
    variant: "primary",
    size: "md",
    sharp: true,
    icon: <ArrowRightIcon className="w-5 h-5" />,
    iconPosition: "right",
  },
};

export const SharpLarge: Story = {
  args: {
    children: "Play Free Now",
    variant: "primary",
    size: "lg",
    sharp: true,
  },
};
