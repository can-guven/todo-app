import { FC } from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import Button from "../../../../components/Button/Button";
import Table from "../../../../components/Table/Table";
import { useJobListContext } from "../../../../context/JobListContext";
import { Job, JobPriorityColorMap, JobPriorityMap } from "../../../../types";

interface JobTableProps {
  loading?: boolean;
}

const JobTable: FC<JobTableProps> = (props) => {
  const { jobs, onJobSelect, setSelectedJobForDelete } = useJobListContext();

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
        <div className="row">
          <div className="col-md-2 mb-2">
            <Button
              color="primary"
              onClick={() => onJobSelect(record)}
              icon={<BsPencilFill />}
            />
          </div>
          <div className="col-md-2">
            <Button
              color="secondary"
              onClick={() => setSelectedJobForDelete(record)}
              icon={<BsFillTrashFill />}
            />
          </div>
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
