import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal, { type ModalProps } from "./Modal";
import Button from "../../Atoms/Button/Button";

const ModalDemo = ({
  children,
  ...props
}: Omit<ModalProps, "open" | "onClose">) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        {children}
      </Modal>
    </div>
  );
};

const defaultChildren = (
  <p className="text-sm leading-relaxed">
    Are you sure you want to proceed? This action cannot be undone. Please
    review before confirming.
  </p>
);

const meta = {
  title: "Components/Molecules/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    sharp: { control: "boolean" },
    title: { control: "text" },
    open: { table: { disable: true } },
    onClose: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  render: (args) => (
    <ModalDemo
      title={args.title ?? "Modal Title"}
      variant={args.variant}
      sharp={args.sharp}
      customColour={args.customColour}
    >
      {defaultChildren}
    </ModalDemo>
  ),
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { title: "Confirm Action", variant: "primary" },
};

export const Secondary: Story = {
  args: { title: "Confirm Action", variant: "secondary" },
};

export const Tertiary: Story = {
  args: { title: "Confirm Action", variant: "tertiary" },
};

export const Sharp: Story = {
  args: { title: "Confirm Action", sharp: true },
};

export const SharpSecondary: Story = {
  args: { title: "Confirm Action", variant: "secondary", sharp: true },
};

export const SharpTertiary: Story = {
  args: { title: "Confirm Action", variant: "tertiary", sharp: true },
};

export const CustomColour: Story = {
  args: { title: "Custom Modal", customColour: "#f97316" },
};

export const SharpCustomColour: Story = {
  args: { title: "Custom Modal", customColour: "#f97316", sharp: true },
};

export const WithLongContent: Story = {
  args: { title: "Terms & Conditions", variant: "primary" },
  render: (args) => (
    <ModalDemo
      title={args.title ?? "Terms & Conditions"}
      variant={args.variant}
      sharp={args.sharp}
    >
      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
    </ModalDemo>
  ),
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="flex gap-3">
      <ModalDemo title="Primary" variant="primary">
        {defaultChildren}
      </ModalDemo>
      <ModalDemo title="Secondary" variant="secondary">
        {defaultChildren}
      </ModalDemo>
      <ModalDemo title="Tertiary" variant="tertiary">
        {defaultChildren}
      </ModalDemo>
    </div>
  ),
};

export const AllSharpVariants: Story = {
  args: {},
  render: () => (
    <div className="flex gap-3">
      <ModalDemo title="Primary" variant="primary" sharp>
        {defaultChildren}
      </ModalDemo>
      <ModalDemo title="Secondary" variant="secondary" sharp>
        {defaultChildren}
      </ModalDemo>
      <ModalDemo title="Tertiary" variant="tertiary" sharp>
        {defaultChildren}
      </ModalDemo>
    </div>
  ),
};
