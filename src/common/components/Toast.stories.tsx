import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Common/Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "토스트에 표시될 메시지",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "기본 토스트 메시지",
  },
};

export const LongMessage: Story = {
  args: {
    text: "긴 토스트 메시지입니다. 여러 줄로 표시될 수 있습니다.",
  },
};

export const ShortMessage: Story = {
  args: {
    text: "짧음",
  },
};

export const SuccessMessage: Story = {
  args: {
    text: "성공적으로 처리되었습니다!",
  },
};

export const ErrorMessage: Story = {
  args: {
    text: "오류가 발생했습니다.",
  },
};
