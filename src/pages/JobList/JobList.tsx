import { useEffect, useState } from "react";
import { useJobListContext } from "../../context/JobListContext";
import { Job } from "../../types";
import JobCreateForm from "./components/JobCreateForm/JobCreateForm";
import JobEditModal from "./components/JobEditModal/JobEditModal";
import JobTable from "./components/JobTable/JobTable";

const JobList = () => {
  const {
    getJobs,
    loading,
    onJobCreate,
    selectedJob,
    setSelectedJob,
    onJobUpdate,
  } = useJobListContext();

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const onSubmit = (job: Job) => {
    onJobCreate(job);
  };

  const onClose = () => {
    setSelectedJob(null);
  };

  const onSave = (job: Job | null) => {
    onJobUpdate(job as Job);
  };

  return (
    <div>
      <JobCreateForm onSubmit={onSubmit} />
      <JobEditModal job={selectedJob} onClose={onClose} onSave={onSave} />
      <JobTable loading={loading} />
    </div>
  );
};
export default JobList;
