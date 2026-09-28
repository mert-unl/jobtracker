import React from 'react'

import JobCard from "../components/JobCard"
import type { StatusCategory } from "../interfaces/StatusCategory"


export default function StatusCategory({
    jobs,
    status,
    onUpdate,
    onDelete
}: StatusCategory) {

    const filteredJobs = jobs.filter((job) => job.status === status)

    return (
        <div className="flex-1 border-gray-400 p-6 rounded-xl border py-4">
            <h3>{status}</h3>

            <div className="mt-6 flex flex-col gap-4">
                {filteredJobs.map((job) => (
                    <JobCard
                        key={job.id}
                        job={job}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
}