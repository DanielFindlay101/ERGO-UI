import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Toggle from "../../Atoms/Toggle/Toggle";
import Button from "../../Atoms/Button/Button";

const meta = {
  title: "Components/Molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    sharp: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "420px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleContent =
  "ERGO-UI is a component library built for high-performance interfaces. Each component is designed to be composable, accessible, and visually consistent.";

export const Default: Story = {
  args: {
    title: "",
  },
  render: () => (
    <Card title="Notifications">
      <div className="flex flex-col gap-3">
        <p>Here is my card content</p>
      </div>
    </Card>
  ),
};

export const Secondary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "tertiary",
  },
};

export const Sharp: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "primary",
    sharp: true,
  },
};

export const SharpSecondary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "secondary",
    sharp: true,
  },
};

export const SharpTertiary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "tertiary",
    sharp: true,
  },
};

export const WithToggle: Story = {
  args: { title: "" },
  render: () => (
    <Card variant="primary" title="Notifications">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span>Email notifications</span>
          <Toggle />
        </div>
        <div className="flex items-center justify-between">
          <span>Push notifications</span>
          <Toggle />
        </div>
        <div className="flex items-center justify-between">
          <span>SMS alerts</span>
          <Toggle />
        </div>
      </div>
    </Card>
  ),
};

export const WithToggleSharp: Story = {
  args: { title: "" },
  render: () => (
    <Card title="Notifications" sharp>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span>Email notifications</span>
          <Toggle sharp />
        </div>
        <div className="flex items-center justify-between">
          <span>Push notifications</span>
          <Toggle sharp />
        </div>
        <div className="flex items-center justify-between">
          <span>SMS alerts</span>
          <Toggle sharp />
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button sharp variant="ghost">
            Cancel
          </Button>
          <Button sharp variant="primary">
            Confirm
          </Button>
        </div>
      </div>
    </Card>
  ),
};

export const CustomColour: Story = {
  args: {
    title: "Custom Colour",
    children: sampleContent,
    customColour: "#f97316",
  },
};

export const AllVariants: Story = {
  args: { title: "" },
  render: () => (
    <div className="flex flex-col gap-3 w-[420px]">
      <Card title="Primary" variant="primary">
        {sampleContent}
      </Card>
      <Card title="Secondary" variant="secondary">
        {sampleContent}
      </Card>
      <Card title="Tertiary" variant="tertiary">
        {sampleContent}
      </Card>
    </div>
  ),
};

export const AllVariantsSharp: Story = {
  args: { title: "" },
  render: () => (
    <div className="flex flex-col gap-3 w-[420px]">
      <Card title="Primary" variant="primary" sharp>
        {sampleContent}
      </Card>
      <Card title="Secondary" variant="secondary" sharp>
        {sampleContent}
      </Card>
      <Card title="Tertiary" variant="tertiary" sharp>
        {sampleContent}
      </Card>
    </div>
  ),
};
