import { FC } from "react";
import Table from "../../../../components/Table/Table";

interface JobTableProps {
  jobs: any[];
  loading?: boolean;
}

const JobTable: FC<JobTableProps> = (props) => {
  const { jobs } = props;

  const columns = [
    {
      name: "jobTitle",
      label: "Name",
    },
    {
      name: "priority",
      label: "Priority",
      render: (record: any) => <div>Selam</div>,
    },
    {
      name: "action",
      label: "Action",
      render: (record: any) => <div>Action</div>,
    },
  ];

  return (
    <div>
      <h3>Job List</h3>
      <Table columns={columns} dataSource={jobs} />
    </div>
  );
};

export default JobTable;
