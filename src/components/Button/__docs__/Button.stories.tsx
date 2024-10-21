import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
  argTypes: {
    style: {
      options: ["filled", "outlined", "ghost"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Filled: Story = {
  args: {
    text: "Button",
    style: "filled",
    onClick: () => console.log("Button"),
  },
};

export const Outlined: Story = {
  args: {
    text: "Button",
    style: "outlined",
    onClick: () => console.log("Button"),
  },
};

export const Ghost: Story = {
  args: {
    text: "Button",
    style: "ghost",
    onClick: () => console.log("Button"),
  },
};

export const WithIconLeft: Story = {
  args: {
    text: "Button",
    style: "filled",
    icon: "https://placehold.co/24",
    iconDimensions: { width: 24, height: 24 },
    iconPosition: "left",
    onClick: () => console.log("Button"),
  },
};

export const WithIconRight: Story = {
  args: {
    text: "Button",
    style: "filled",
    icon: "https://placehold.co/24",
    iconDimensions: { width: 24, height: 24 },
    iconPosition: "right",
    onClick: () => console.log("Button"),
  },
};
