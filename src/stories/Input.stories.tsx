import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input/Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
export const WithLabel = Template.bind({});
export const WithError = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  placeholder: "Input",
};
WithError.args = {
  placeholder: "Input",
  error: "Error",
};

WithLabel.args = {
  placeholder: "Input",
  label: "Label",
};

Disabled.args = {
  placeholder: "Input",
  disabled: true,
};
