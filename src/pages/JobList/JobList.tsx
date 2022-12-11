import { useEffect } from "react";
import { useJobListContext } from "../../context/JobListContext";
import { Job } from "../../types";
import JobCreateForm from "./components/JobCreateForm/JobCreateForm";
import JobTable from "./components/JobTable/JobTable";

const JobList = () => {
  const { jobs, getJobs, loading, onJobCreate } = useJobListContext();

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const onSubmit = (job: Job) => {
    onJobCreate(job);
  };

  return (
    <div>
      <JobCreateForm onSubmit={onSubmit} />
      <JobTable jobs={jobs} loading={loading} />
    </div>
  );
};

export default JobList;
