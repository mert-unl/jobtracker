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

export type JobStatus = | "Waiting"
    | "Applied"
    | "Interview"
    | "Offer"
    | "Rejected"