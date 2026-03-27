import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Alert from "./AlertSharp";

const meta = {
  title: "Components/Atoms/Alert/Sharp",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["complete", "info", "secondary", "danger"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const BODY = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

export const Complete: Story = {
  args: {
    variant: "complete",
    headingText: "Success",
    bodyText: BODY,
    alertIcon: <CheckCircleIcon className="w-8 h-8 text-white" />,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    headingText: "Information",
    bodyText: BODY,
    alertIcon: <InformationCircleIcon className="w-8 h-8 text-white" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    headingText: "Notice",
    bodyText: BODY,
    alertIcon: <ExclamationTriangleIcon className="w-8 h-8 text-white" />,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    headingText: "Error",
    bodyText: BODY,
    alertIcon: <XCircleIcon className="w-8 h-8 text-white" />,
  },
};

export const AllVariants: Story = {
  args: { headingText: "", bodyText: "" },
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Alert
        variant="complete"
        headingText="Success"
        bodyText={BODY}
        alertIcon={<CheckCircleIcon className="w-8 h-8 text-white" />}
      />
      <Alert
        variant="info"
        headingText="Information"
        bodyText={BODY}
        alertIcon={<InformationCircleIcon className="w-8 h-8 text-white" />}
      />
      <Alert
        variant="secondary"
        headingText="Notice"
        bodyText={BODY}
        alertIcon={<ExclamationTriangleIcon className="w-8 h-8 text-white" />}
      />
      <Alert
        variant="danger"
        headingText="Error"
        bodyText={BODY}
        alertIcon={<XCircleIcon className="w-8 h-8 text-white" />}
      />
    </div>
  ),
};
