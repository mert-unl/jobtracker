import type { Job } from "../interfaces/Job"

interface JobCardProps {
    job: Job
    onUpdate: (job: Job) => void
    onDelete: (id: string) => void
}

function JobCard({ job, onUpdate, onDelete }: JobCardProps) {
    return (
        <div className="flex flex-col rounded-xl border border-gray-700 bg-gray-800 px-4 py-6 text-white">



            <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                    <h2 className="text-2xl font-bold">{job.company}</h2>
                    <p className="text-md text-gray-400">{job.position}</p>
                </div>

                <p>{job.status}</p>

            </div>
            <p>{job.location}</p>
            <p>{job.appliedDate}</p>
            <p>{job.salary}</p>
            <p>{job.jobUrl}</p>
            <p>{job.notes}</p>

            <div className="mt-4 flex gap-4">
                <button onClick={() => onUpdate(job)}>
                    Update
                </button>

                <button onClick={() => onDelete(job.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default JobCard