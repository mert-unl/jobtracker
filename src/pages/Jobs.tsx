import { useEffect, useState } from "react"
import type { Job } from "../interfaces/Job"

import {
    getJobs,
    createJob,
    updateJob,
    deleteJob
} from "../services/jobService"
import StatusCategory from "../components/statusCategory"

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        loadJobs()
    }, [])

    async function loadJobs() {
        const data = await getJobs()
        setJobs(data)
    }

    async function handleCreate() {
        await createJob({
            company: "Test Company",
            position: "Frontend Developer",
            location: "Remote",
            status: "Waiting",
            salary: "50.000 TL",
            jobUrl: "https://example.com",
            notes: "Test ilanı"
        })

        await loadJobs()
    }

    async function handleUpdate(job: Job) {
        await updateJob({
            ...job,
            status: "Interview"
        })

        await loadJobs()
    }

    async function handleDelete(id: string) {
        await deleteJob(id)
        await loadJobs()
    }

    return (
        <div className="w-full h-screen items-center bg-gray-950">
            <div className="p-12 text-white">
                <h1>Jobs</h1>

                <button onClick={handleCreate}>
                    Test Create
                </button>

                <div className="flex flex-row gap-5">
                    <StatusCategory
                        jobs={jobs}
                        status="Waiting"
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                    <StatusCategory
                        jobs={jobs}
                        status="Applied"
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />

                    <StatusCategory
                        jobs={jobs}
                        status="Interview"
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                    <StatusCategory
                        jobs={jobs}
                        status="Offer"
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                    <StatusCategory
                        jobs={jobs}
                        status="Rejected"
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    )
}



export default Jobs