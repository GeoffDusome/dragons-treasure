import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Accordion",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Title 1",
        content: "Content 1",
        open: true,
      },
      {
        title: "Title 2",
        content: "Content 2",
      },
      {
        title: "Title 3",
        content: "Content 3",
      },
    ],
    defaultOpen: false,
  },
};
