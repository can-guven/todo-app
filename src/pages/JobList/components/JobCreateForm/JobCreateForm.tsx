import { FC, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import { Job } from "../../../../types";

interface JobCreateFormProps {
  onSubmit: (job: Job) => void;
}

const JobCreateForm: FC<JobCreateFormProps> = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ jobTitle, priority: parseInt(priority) });
  };

  return (
    <div>
      <h3>Create New Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end">
          <div className="col-md-6">
            <Input
              id="jobTitle"
              value={jobTitle}
              name="jobTitle"
              label="Job Name"
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <Input
              id="priority"
              value={priority}
              name="priority"
              label="Priority"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />
          </div>
          <div className="col-md-2">
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
