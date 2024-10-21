import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Link",
  component: Example,
  argTypes: {
    target: {
      options: ["_self", "_blank", "_parent", "_top"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    to: "https://www.google.com",
    target: "_self",
    text: "Button",
  },
};
