import { FC, useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Select from "../../../../components/Select/Select";
import { useJobListContext } from "../../../../context/JobListContext";
import { Job, JobPriority, priorities } from "../../../../types";

interface JobEditFormProps {
  job: Job | null;
  onClose: () => void;
  onSave: (job: Job | null) => void;
}

const JobEditForm: FC<JobEditFormProps> = (props) => {
  const { onClose, onSave, job } = props;

  const [jobTitle, setJobTitle] = useState<string | undefined>("");
  const [priority, setPriority] = useState<string | undefined>("");
  const [jobTitleError, setJobTitleError] = useState<string>("");
  const [priorityError, setPriorityError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <form onSubmit={handleSubmit}>
        <Input
          label="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          error={jobTitleError}
        />
        <Select
          label="Priority"
          options={priorities}
          onChange={(e) => setPriority(e.target.value)}
          error={priorityError}
          name={"priority"}
          value={priority}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default JobEditForm;
