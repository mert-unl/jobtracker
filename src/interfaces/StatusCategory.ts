
import type { Job } from "../interfaces/Job"
export interface StatusCategory {
    jobs: Job[]
    status: Job["status"]
    onReject: (job: Job) => void
    onNext: (job: Job) => void
    onDelete: (id: string) => void
    onEdit: (job: Job) => void
}