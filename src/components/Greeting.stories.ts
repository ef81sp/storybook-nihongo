import type { Meta, StoryObj } from "@storybook/vue3";
import Greeting from "./Greeting.vue";

const meta = {
  title: "Greeting",
  component: Greeting,
  tags: ["autodocs"],
} satisfies Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    label: "さようなら",
    size: "小さい",
  },
};
