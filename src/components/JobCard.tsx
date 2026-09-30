import type { Job } from "../interfaces/Job"

interface JobCardProps {
    job: Job
    onReject: (job: Job) => void
    onDelete: (id: string) => void
    onNext: (job: Job) => void
    onEdit: (job: Job) => void
}

type ButtonVariant = "rejected" | "next"

interface ButtonProps {
    text: string
    onClick: () => void
    variant: ButtonVariant
}

function JobCard({ job, onReject, onDelete, onNext, onEdit }: JobCardProps) {
    console.log("job id : " + job.id)

    return (
        <div className="flex flex-col rounded-xl border gap-3 border-gray-700 bg-gray-800 p-4 text-white">

            <div className="flex items-start justify-between border-b border-orange-200">

                <div>
                    <h2 className="text-xl font-bold">
                        {job.position}
                    </h2>

                    <p>
                        {job.company}
                    </p>
                </div>

                <div className="flex gap-1">
                    <button onClick={() => onEdit(job)}
                        className="rounded-md p-1 hover:bg-gray-700 hover:text-white"
                        title="Edit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                    </button>

                    <button
                        onClick={() => onDelete(job.id)}
                        className="rounded-md p-1 bg-red-900 hover:bg-red-700 hover:text-white"
                        title="Delete"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                </div>

            </div>

            <InfoText text={job.location} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>}
            />
            <InfoText text={job.salary} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>} />

            <InfoText text={job.appliedDate} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>} />
            <InfoText text={job.jobUrl} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
            </svg>
            } />
            <InfoText text={job.notes} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>} />


            <div className="mt-4 flex gap-4">

                {job.status !== "Saved Jobs" &&
                    job.status !== "Accepted" &&
                    job.status !== "Rejected" && (
                        <Button
                            text="Rejected"
                            variant="rejected"
                            onClick={() => onReject(job)}
                        />
                    )}

                {job.status !== "Accepted" &&
                    job.status !== "Rejected" && (
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
            ? "bg-red-900/30 text-red-300 hover:bg-red-900/50"
            : "bg-green-900/30 text-green-300 hover:bg-green-900/50"

    return (
        <button
            onClick={onClick}
            className={`rounded-md border border-gray-600 px-4 py-2 transition hover:cursor-pointer ${buttonStyle}`}
        >
            {text}
        </button>
    )
}


interface InfoTextProps {
    text?: string
    svg: React.ReactNode
}

function InfoText({ text, svg }: InfoTextProps) {
    return (
        <div className="flex items-center gap-2">
            {svg}
            <p>{text ?? "-"}</p>
        </div>
    )
}
export default JobCard