import { FC } from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import Button from "../../../../components/Button/Button";
import Table from "../../../../components/Table/Table";
import { Job, JobPriorityColorMap, JobPriorityMap } from "../../../../types";

interface JobTableProps {
  jobs: Job[];
  loading?: boolean;
}

const JobTable: FC<JobTableProps> = (props) => {
  const { jobs } = props;

  const columns = [
    {
      name: "jobTitle",
      label: "Name",
      sortable: true,
    },
    {
      name: "priority",
      label: "Priority",
      render: (record: Job) => (
        <Button color={JobPriorityColorMap[record.priority]}>
          {JobPriorityMap[record.priority]}
        </Button>
      ),
      sortable: true,
    },
    {
      name: "action",
      label: "Action",
      render: (record: any) => (
        <div>
          <Button
            className="me-2"
            color="primary"
            onClick={() => {}}
            icon={<BsPencilFill />}
          />
          <Button
            color="secondary"
            onClick={() => {}}
            icon={<BsFillTrashFill />}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h3>Job List</h3>
      <Table
        columns={columns}
        dataSource={jobs}
        defaultSortOrder={false}
        defualtSortColumn="priority"
      />
    </div>
  );
};

export default JobTable;
