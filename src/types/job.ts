export interface Job {
  id: string;
  jobTitle: string;
  priority: JobPriority;
}

export enum JobPriority {
  Trivial = "1",
  Regular = "2",
  Urgent = "3",
}

export enum JobPriorityColor {
  Trivial = "primary",
  Regular = "warning",
  Urgent = "danger",
}

export const JobPriorityColorMap = {
  [JobPriority.Trivial]: JobPriorityColor.Trivial,
  [JobPriority.Regular]: JobPriorityColor.Regular,
  [JobPriority.Urgent]: JobPriorityColor.Urgent,
};

export const JobPriorityMap = {
  [JobPriority.Trivial]: "Trivial",
  [JobPriority.Regular]: "Regular",
  [JobPriority.Urgent]: "Urgent",
};

export const priorities = [
  {
    label: "Trivial",
    value: JobPriority.Trivial,
  },
  {
    label: "Regular",
    value: JobPriority.Regular,
  },
  {
    label: "Urgent",
    value: JobPriority.Urgent,
  },
];
