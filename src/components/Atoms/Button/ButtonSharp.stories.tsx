import type { Meta, StoryObj } from "@storybook/react";
import Button from "./ButtonSharp";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const meta = {
  title: "Components/Atoms/Button/Sharp",
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
    outline: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Play Free Now",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Press me",
    variant: "secondary",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "Play Free Now",
    variant: "danger",
    size: "md",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Play Free Now",
    variant: "primary",
    size: "md",
    icon: <ArrowRightIcon className="w-5 h-5" />,
    iconPosition: "right",
  },
};

export const Large: Story = {
  args: {
    children: "Play Free Now",
    variant: "primary",
    size: "lg",
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

export const AllVariants: Story = {
  args: { children: "" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
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
