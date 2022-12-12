import { FC } from "react";
import Button from "../Button/Button";
import "./ConfirmDialog.scss";

interface ConfirmDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}
//Are you sure you want to delete this job?
const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const { title, message, onConfirm, onCancel, isOpen } = props;
  return (
    <div className={`confirm ${isOpen ? "is-open" : ""}`}>
      <div className="confirm-title">{title}</div>
      <div className="confirm-content">
        {message}
        <div className="confirm-content-btns">
          <Button color="primary" onClick={onConfirm}>Yes</Button>
          <Button color="secondary" onClick={onCancel}>No</Button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmDialog;
