import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./AvatarSharp";

const meta = {
  title: "Components/Atoms/Avatar/Sharp",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: [undefined, "online", "away", "offline"],
    },
    size: {
      control: { type: "number", min: 24, max: 128, step: 8 },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const src = "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp";

export const Default: Story = {
  args: { src },
};

export const Online: Story = {
  args: { src, status: "online" },
};

export const Away: Story = {
  args: { src, status: "away" },
};

export const Offline: Story = {
  args: { src, status: "offline" },
};

export const Large: Story = {
  args: { src, size: 96, status: "online" },
};

export const Small: Story = {
  args: { src, size: 32, status: "online" },
};

export const AllStatuses: Story = {
  args: { src },
  render: () => (
    <div className="flex gap-6 items-center">
      <Avatar src={src} status="online" />
      <Avatar src={src} status="away" />
      <Avatar src={src} status="offline" />
    </div>
  ),
};

export const SizeComparison: Story = {
  args: { src },
  render: () => (
    <div className="flex gap-6 items-end">
      <Avatar src={src} size={32} status="online" />
      <Avatar src={src} size={48} status="online" />
      <Avatar src={src} size={64} status="online" />
      <Avatar src={src} size={96} status="online" />
    </div>
  ),
};
