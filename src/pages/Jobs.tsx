
import { useEffect, useState } from "react"
import type { Job } from "../interfaces/Job"
import { getJobs } from "../services/jobService"

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        getJobs().then((data) => {
            setJobs(data)
        })
    }, [])

    return (
        <div>
            <h1>Jobs</h1>
            {jobs.map((job) => (
                <div key={job.id}>
                    <h2>{job.position}</h2>
                    <p>{job.company}</p>
                    <p>{job.status}</p>
                </div>
            ))}
        </div>
    )
}

export default Jobs