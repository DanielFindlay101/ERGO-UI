import type { Meta, StoryObj } from "@storybook/react";
import Card from "./CardSharp";
import Toggle from "../../Atoms/Toggle/ToggleSharp";
import Button from "../../Atoms/Button/ButtonSharp";
import { InboxIcon } from "@heroicons/react/24/outline";

const meta = {
  title: "Components/Molecules/Card/Sharp",
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

export const Primary: Story = {
  args: {
    title: "Card Title",
    children: sampleContent,
    variant: "primary",
  },
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

export const WithToggle: Story = {
  args: { title: "" },
  render: () => (
    <Card
      title="Notifications"
      headerIcon={<InboxIcon className="w-4 h-4" />}
    >
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
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    </Card>
  ),
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
