import { FC, useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import { Job, JobPriority, priorities } from "../../../../types";
import { isEmpty } from "../../../../utils";

interface JobEditFormProps {
  job: Job | null;
  onClose: () => void;
  onSave: (job: Job | null) => void;
}

const JobEditForm: FC<JobEditFormProps> = (props) => {
  const { onClose, onSave, job } = props;

  const [jobTitle, setJobTitle] = useState<string | undefined>("");
  const [priority, setPriority] = useState<string | undefined>("");
  const [priorityError, setPriorityError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmpty(priority)) {
      setPriorityError("Priority is required");
      return;
    }
    onSave({
      id: job?.id as string,
      jobTitle: jobTitle as string,
      priority: priority as JobPriority,
    });
    onClose();
  };

  useEffect(() => {
    if (!job) {
      return;
    }
    setJobTitle(job?.jobTitle);
    setPriority(job?.priority);
  }, [job]);

  return (
    <div>
      <h3>Edit Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <Input label="Job Title" value={jobTitle} disabled />
        </div>
        <div className="mb-2">
          <Select
            label="Priority"
            options={priorities}
            onChange={(e) => setPriority(e.target.value)}
            error={priorityError}
            name={"priority"}
            value={priority}
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default JobEditForm;
