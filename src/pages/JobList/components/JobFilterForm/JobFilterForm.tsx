import { FC, useState } from "react";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import { priorities } from "../../../../types";

interface JobFilterFormProps {
  onFilter: (filter: any) => void;
}

const JobFilterForm: FC<JobFilterFormProps> = (props) => {
  const [filterTitle, setFilterTitle] = useState<string | undefined>("");
  const [filterPriority, setFilterPriority] = useState<string | undefined>("");

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTitle(e.target.value);
    props.onFilter({
      filterTitle: e.target.value,
      filterPriority,
    });
  };
  const onPriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPriority(e.target.value);
    props.onFilter({
      filterTitle,
      filterPriority: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Job Filter</h3>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end">
          <div className="col-md-8 mb-2">
            <Input
              label="Job Name"
              name="filter-title"
              onChange={onTitleChange}
            />
          </div>
          <div className="col-md-4 mb-2">
            <Select
              name={"filter-priority"}
              label="Priority"
              options={priorities}
              onChange={onPriorityChange}
              value={filterPriority}
              placeholder="Priority (all)"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobFilterForm;
