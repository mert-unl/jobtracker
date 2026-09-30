import type { Job } from "../interfaces/Job"

interface JobCardProps {
    job: Job
    onReject: (job: Job) => void
    onDelete: (id: string) => void
    onNext: (job: Job) => void

}

type ButtonVariant = "rejected" | "next"

interface ButtonProps {
    text: string
    onClick: () => void
    variant: ButtonVariant
}

function JobCard({ job, onReject, onDelete, onNext }: JobCardProps) {
    return (
        <div className="flex flex-col rounded-xl border border-gray-700 bg-gray-800 px-4 py-6 text-white">

            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-xl font-bold">
                        {job.position}
                    </h2>

                    <p>
                        {job.company}
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                        title="Edit"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(job.id)}
                        className="rounded-md p-2 text-gray-400 bg-red-900 hover:bg-red-700 hover:text-white"
                        title="Delete"
                    >
                        Delete
                    </button>
                </div>

            </div>

            <p className="mt-2 text-lg text-gray-400">
                {job.location}
            </p>

            <p>{job.appliedDate}</p>
            <p>{job.salary}</p>
            <p>{job.jobUrl}</p>
            <p>{job.notes}</p>


            <div className="mt-4 flex gap-4">
                {job.status !== "Saved Jobs" &&
                    job.status !== "Rejected" &&
                    job.status !== "Accepted" && (
                        <Button
                            text="Rejected"
                            variant="rejected"
                            onClick={() => onReject(job)}
                        />
                    )}

                {job.status !== "Rejected" && job.status !== "Accepted" && (
                    <Button
                        text={job.status === "Offer" ? "Accepted" : "Next Step"}
                        variant="next"
                        onClick={() => onNext(job)}
                    />
                )}
            </div>

        </div>
    )
}

function Button({ text, onClick, variant }: ButtonProps) {
    const buttonStyle =
        variant === "rejected"
            ? "bg-red-900/40 hover:bg-red-800/60"
            : "bg-green-900/40 hover:bg-green-800/60"

    return (
        <button
            onClick={onClick}
            className={`rounded-md border border-gray-600 px-4 py-2 transition hover:cursor-pointer ${buttonStyle}`}
        >
            {text}
        </button>
    )
}

export default JobCard