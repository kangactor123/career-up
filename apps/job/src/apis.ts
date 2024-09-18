import { ApplyStatusType, JobType } from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getJobs(token: string): Promise<JobType[]> {
  const res = await fetch(`${SERVER_URL}/jobs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export async function getApplyStatus(token: string): Promise<ApplyStatusType> {
  const res = await fetch(`${SERVER_URL}/apply-status`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
