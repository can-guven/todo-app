import { useEffect, useState } from "react";
import { useJobListContext } from "../../context/JobListContext";
import { Job } from "../../types";
import JobCreateForm from "./components/JobCreateForm/JobCreateForm";
import JobEditModal from "./components/JobEditModal/JobEditModal";
import JobFilterForm from "./components/JobFilterForm/JobFilterForm";
import JobTable from "./components/JobTable/JobTable";

const JobList = () => {
  const {
    getJobs,
    loading,
    onJobCreate,
    selectedJob,
    setSelectedJob,
    onJobUpdate,
    onFilter,
    filters,
  } = useJobListContext();

  useEffect(() => {
    getJobs(filters);
  }, [getJobs, filters]);

  const onSubmit = (job: Job) => {
    onJobCreate(job);
  };

  const onClose = () => {
    setSelectedJob(null);
  };

  const onSave = (job: Job | null) => {
    onJobUpdate(job as Job);
  };

  const handleFilter = (filter: any) => {
    onFilter(filter);
  };

  return (
    <div>
      <JobCreateForm onSubmit={onSubmit} />
      <JobEditModal job={selectedJob} onClose={onClose} onSave={onSave} />
      <JobFilterForm onFilter={handleFilter} />
      <JobTable loading={loading} />
    </div>
  );
};
export default JobList;
