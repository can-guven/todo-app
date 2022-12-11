import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select from "../components/Select/Select";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
export const WithError = Template.bind({});

Default.args = {
  options: [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
  ],
};

WithError.args = {
  error: "Error message",
  options: [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
  ],
};
