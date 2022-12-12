import { createContext, FC, useCallback, useContext, useState } from "react";

import { Job } from "../types";

interface JobListContextType {
  getJobs: (filters: any) => void;
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  onJobDelete: (job: Job) => void;
  onJobUpdate: (job: Job) => void;
  onJobCreate: (job: Job) => void;
  loading: boolean;
  selectedJob: Job | null;
  onJobSelect: (job: Job | null) => void;
  setSelectedJob: (job: Job | null) => void;
  onFilter: (filter: any) => void;
  filters: any;
}

const JobListContext = createContext<JobListContextType>({
  getJobs: (filters: any) => {},
  jobs: [],
  setJobs: () => {},
  onJobDelete: () => {},
  onJobUpdate: () => {},
  onJobCreate: () => {},
  loading: false,
  selectedJob: null,
  onJobSelect: () => {},
  setSelectedJob: () => {},
  onFilter: () => {},
  filters: {},
});

interface JobListProviderProps {
  children: React.ReactNode;
}

const JobListProvider: FC<JobListProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState<any>({});
  const getJobs = useCallback((filters: any) => {
    setLoading(true);

    let jobs = JSON.parse(localStorage.getItem("jobs") || "[]");

    if (!jobs) {
      localStorage.setItem("jobs", JSON.stringify([]));
    }

    if (filters.filterTitle) {
      jobs = jobs.filter(
        (job: Job) => job.jobTitle.includes(filters.filterTitle)
      );
    }

    if (filters.filterPriority) {
      jobs = jobs.filter(
        (job: Job) => job.priority === filters.filterPriority
      );
    }
    
    setJobs(jobs);
    setLoading(false);
  }, []);

  const onJobDelete = (job: Job) => {
    const newJobs = jobs.filter((j) => j.id !== job.id);
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  };

  const onJobUpdate = (job: Job) => {
    const newJobs = jobs.map((j) => (j.id === job.id ? job : j));
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  };

  const onJobCreate = (job: Job) => {
    const newJobs = [...jobs, job];
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  };

  const onJobSelect = (job: Job | null) => {
    setSelectedJob(job);
  };

  const onFilter = (filter: any) => {
    setFilters(filter);
  };

  return (
    <JobListContext.Provider
      value={{
        getJobs,
        jobs,
        setJobs,
        onJobDelete,
        onJobUpdate,
        onJobCreate,
        loading,
        selectedJob,
        onJobSelect,
        setSelectedJob,
        onFilter,
        filters,
      }}
    >
      {children}
    </JobListContext.Provider>
  );
};

export { JobListProvider };

export const useJobListContext = () => {
  return useContext(JobListContext);
};
