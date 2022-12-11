import { Job } from "../../types";
import JobCreateForm from "./components/JobCreateForm/JobCreateForm";

const JobList = () => {
  return (
    <div>
      <JobCreateForm
        onSubmit={function (job: Job): void {
          console.log(job)
        }}
      />
    </div>
  );
};
export default JobList;
