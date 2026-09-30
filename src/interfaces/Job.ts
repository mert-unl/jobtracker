export interface Job {
    id: string
    company: string
    position: string
    location: string
    status: JobStatus
    appliedDate?: string
    salary?: string
    jobUrl?: string
    notes?: string
}

export type JobStatus = | "Saved Jobs"
    | "Applied"
    | "Interview"
    | "Offer"
    | "Accepted"
    | "Rejected"

