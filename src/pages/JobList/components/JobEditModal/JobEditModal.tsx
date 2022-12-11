import { FC } from "react";
import Modal from "../../../../components/Modal/Modal";
import { useJobListContext } from "../../../../context/JobListContext";
import { Job } from "../../../../types";
import JobEditForm from "../JobEditForm/JobEditForm";

interface JobEditModalProps {
  job: Job | null;
  onClose: () => void;
  onSave: (job: Job | null) => void;
}

const JobEditModal: FC<JobEditModalProps> = (props) => {
  const { selectedJob } = useJobListContext();
  const { onClose, onSave } = props;

  return (
    <Modal isOpen={selectedJob ? true : false} onClose={onClose}>
      <JobEditForm job={selectedJob} onClose={onClose} onSave={onSave} />
    </Modal>
  );
};

export default JobEditModal;
