import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button/Button";
import { BsPencilFill } from "react-icons/bs";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const WithIcon = Template.bind({});
export const OnlyIcon = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = {
  children: "Button",
};

Secondary.args = {
  children: "Button",
  color: "secondary",
};

WithIcon.args = {
  children: "Button",
  icon: <BsPencilFill />,
};

OnlyIcon.args = {
  icon: <BsPencilFill />,
};

Disabled.args = {
  children: "Button",
  disabled: true,
};
