import { FC, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import { Job, JobPriority, priorities } from "../../../../types";
import { isEmpty } from "../../../../utils";
import { v4 as uuidv4 } from "uuid";

interface JobCreateFormProps {
  onSubmit: (job: Job) => void;
}

const JobCreateForm: FC<JobCreateFormProps> = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [jobTitleError, setJobTitleError] = useState<string>("");
  const [priorityError, setPriorityError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setJobTitleError("");
    setPriorityError("");

    if (isEmpty(jobTitle)) {
      setJobTitleError("Job title is required");
      return;
    }

    if (isEmpty(priority)) {
      setPriorityError("Priority is required");
      return;
    }

    if (jobTitle.length > 250) {
      setJobTitleError("Job title must be less than 250 characters");
      return;
    }

    onSubmit({ jobTitle, priority: priority as JobPriority, id: uuidv4() });
  };

  return (
    <div>
      <h3>Create New Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end">
          <div className="col-md-6 mb-2">
            <Input
              id="jobTitle"
              value={jobTitle}
              name="jobTitle"
              label="Job Name"
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
              error={jobTitleError}
            />
          </div>
          <div className="col-md-4 mb-2">
            <Select
              name={"priority"}
              options={priorities}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              label="Priority"
              placeholder="Select Priority"
              error={priorityError}
            />
          </div>
          <div className="col-md-2 mb-2">
            <Button type="submit" icon={<BsFillPlusSquareFill />}>
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobCreateForm;
