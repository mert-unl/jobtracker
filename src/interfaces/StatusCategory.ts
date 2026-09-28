
import type { Job } from "../interfaces/Job"
export interface StatusCategory {
    jobs: Job[]
    status: Job["status"]
    onUpdate: (job: Job) => void
    onDelete: (id: string) => void
}