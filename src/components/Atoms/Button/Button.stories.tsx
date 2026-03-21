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
    outline: {
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
    onClick: () => console.log("Hi"),
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

export const OutlinePrimary: Story = {
  args: { children: "Button", variant: "primary", outline: true },
};

export const OutlineSecondary: Story = {
  args: { children: "Button", variant: "secondary", outline: true },
};

export const OutlineTertiary: Story = {
  args: { children: "Button", variant: "tertiary", outline: true },
};

export const OutlineDanger: Story = {
  args: { children: "Button", variant: "danger", outline: true },
};

export const SharpOutlinePrimary: Story = {
  args: { children: "Button", variant: "primary", sharp: true, outline: true },
};

export const SharpOutlineSecondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    sharp: true,
    outline: true,
  },
};

export const SharpOutlineTertiary: Story = {
  args: { children: "Button", variant: "tertiary", sharp: true, outline: true },
};

export const SharpOutlineDanger: Story = {
  args: { children: "Button", variant: "danger", sharp: true, outline: true },
};

export const CustomColor: Story = {
  args: {
    children: "Custom Button",
    customColor: "#e60076",
    size: "md",
    sharp: true,
  },
};

export const AllOutlineVariants: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Button variant="primary" outline>
        Primary
      </Button>
      <Button variant="secondary" outline>
        Secondary
      </Button>
      <Button variant="tertiary" outline>
        Tertiary
      </Button>
      <Button variant="danger" outline>
        Danger
      </Button>
    </div>
  ),
};

export const AllOutlineVariantsSharp: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Button variant="primary" outline sharp>
        Primary
      </Button>
      <Button variant="secondary" outline sharp>
        Secondary
      </Button>
      <Button variant="tertiary" outline sharp>
        Tertiary
      </Button>
      <Button variant="danger" outline sharp>
        Danger
      </Button>
    </div>
  ),
};
