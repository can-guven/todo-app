import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";

export default {
  title: "Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
export const WithRenderFncColumns = Template.bind({});

Default.args = {
  columns: [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "priority",
      label: "Priority",
    },
  ],
  dataSource: [
    {
      key: 1,
      name: "name1",
      priority: "priority1",
    },
    {
      key: 2,
      name: "name2",
      priority: "priority2",
    },
  ],
};

WithRenderFncColumns.args = {
  columns: [
    {
      name: "name",
      label: "Name",

      render: (record) => <div>{record.name}</div>,
    },
    {
      name: "priority",
      label: "Priority",
      render: (record) => <div>{record.priority}</div>,
    },
    {
      name: "actions",
      label: "Actions",
      render: (record) => <Button>Action</Button>,
    },
  ],
  dataSource: [
    {
      key: 1,
      name: "name1",
      priority: "priority1",
    },
    {
      key: 2,
      name: "name2",
      priority: "priority2",
    },
  ],
};
