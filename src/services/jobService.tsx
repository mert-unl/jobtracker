import type { Job } from "../interfaces/Job"

const API_URL = "https://6aba7d815b549d818d627668.mockapi.io/jobs"

export async function getJobs(): Promise<Job[]> {

    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error("Failed to fetch jobs")
    }

    return response.json()
}



export async function createJob(job: Omit<Job, "id">): Promise<Job> {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(job)
    })

    if (!response.ok) {
        throw new Error("Failed to create job")
    }

    return response.json()
}


export async function updateJob(job: Job): Promise<Job> {

    const response = await fetch(`${API_URL}/${job.id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)

    })


    if (!response.ok) {
        throw new Error("Failed to update job")
    }

    return response.json()
}



export async function deleteJob(id: string): Promise<void> {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })


    if (!response.ok) {
        throw new Error("Failed to delete job")
    }
}