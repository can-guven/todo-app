import { FC } from "react";
import Table from "../../../../components/Table/Table";

interface JobTableProps {
  jobs: any[];
  onJobClick: (job: any) => void;
}

const JobTable: FC<JobTableProps> = (props) => {
  const { jobs, onJobClick } = props;

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "priority",
      label: "Priority",
      render: (record: any) => (
        <div onClick={() => onJobClick(record)}>{record.priority}</div>
      ),
    },
    {
      name: "action",
      label: "Action",
      render: (record: any) => (
        <div onClick={() => onJobClick(record)}>Action</div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={jobs} />;
};

export default JobTable;
