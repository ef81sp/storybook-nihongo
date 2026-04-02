import type { Meta, StoryObj } from "@storybook/vue3";
import GreetingWithDefaults from "./GreetingWithDefaults.vue";

const meta = {
  title: "GreetingWithDefaults",
  component: GreetingWithDefaults,
  tags: ["autodocs"],
} satisfies Meta<typeof GreetingWithDefaults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
