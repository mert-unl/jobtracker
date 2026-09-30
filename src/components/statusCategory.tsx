import JobCard from "../components/JobCard"
import type { StatusCategory } from "../interfaces/StatusCategory"


export default function StatusCategory({
    jobs,
    status,
    onDelete,
    onNext,
    onReject
    //onEdit
}: StatusCategory) {

    const filteredJobs = jobs.filter((job) => job.status === status)

    return (
        <div className="flex-1 p-2">
            <div className='flex justify-between py-2  border-b border-gray-600'>
                <h2 className='text-xl'>{status}</h2>
                <p className='text-xl text-gray-300'>{filteredJobs.length}</p>
            </div>

            <div className="py-4 flex flex-col gap-4">
                {filteredJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onReject={onReject}
                        onDelete={onDelete}
                        onNext={onNext}
                    //onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    )
}