import { createContext, FC, useCallback, useContext, useState } from "react";

import { Job } from "../types";

interface JobListContextType {
  getJobs: () => void;
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  onJobDelete: (job: Job) => void;
  onJobUpdate: (job: Job) => void;
  onJobCreate: (job: Job) => void;
  loading: boolean;
  selectedJob: Job | null;
  onJobSelect: (job: Job | null) => void;
  setSelectedJob: (job: Job | null) => void;
}

const JobListContext = createContext<JobListContextType>({
  getJobs: () => {},
  jobs: [],
  setJobs: () => {},
  onJobDelete: () => {},
  onJobUpdate: () => {},
  onJobCreate: () => {},
  loading: false,
  selectedJob: null,
  onJobSelect: () => {},
  setSelectedJob: () => {},
});

interface JobListProviderProps {
  children: React.ReactNode;
}

const JobListProvider: FC<JobListProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const getJobs = useCallback(() => {
    setLoading(true);

    const jobs = localStorage.getItem("jobs");

    if (jobs) {
      setJobs(JSON.parse(jobs));
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
