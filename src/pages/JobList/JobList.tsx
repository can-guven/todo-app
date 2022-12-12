import { useEffect, useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
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
    selectedJobForDelete,
    onJobDelete,
    setSelectedJobForDelete,
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

  const onConfirm = () => {
    onJobDelete(selectedJobForDelete as Job);
    setSelectedJobForDelete(null);
  };

  const onCancel = () => {
    setSelectedJobForDelete(null);
  };

  return (
    <div>
      <JobCreateForm onSubmit={onSubmit} />
      <JobEditModal job={selectedJob} onClose={onClose} onSave={onSave} />
      <JobFilterForm onFilter={handleFilter} />
      <JobTable loading={loading} />
      <ConfirmDialog
        isOpen={selectedJobForDelete ? true : false}
        title=""
        message="Are you sure you want to delete it?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
};
export default JobList;
