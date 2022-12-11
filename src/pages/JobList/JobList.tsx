import { Job } from "../../types";
import JobCreateForm from "./components/JobCreateForm/JobCreateForm";
import JobTable from "./components/JobTable/JobTable";

const JobList = () => {
  return (
    <div>
      <JobCreateForm
        onSubmit={function (job: Job): void {
          console.log(job);
        }}
      />
      <JobTable jobs={[]} onJobClick={function (job: Job): void {}} />
    </div>
  );
};
export default JobList;
