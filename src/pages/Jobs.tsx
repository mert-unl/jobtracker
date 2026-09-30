import { useEffect, useState } from "react"
import type { Job } from "../interfaces/Job"
import StatusCategory from "../components/statusCategory"
import JobCreateModal from "../components/jobCreateModal"
import {
    createJob,
    getJobs,
    updateJob,
    deleteJob,
} from "../services/jobService"



function Jobs() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [jobs, setJobs] = useState<Job[]>([])
    const [editingJob, setEditingJob] = useState<Job | null>(null)

    const statuses: Job["status"][] = [
        "Saved Jobs",
        "Applied",
        "Interview",
        "Offer",
        "Accepted",
        "Rejected"
    ]

    useEffect(() => {
        loadJobs()
    }, [])

    async function loadJobs() {
        const data = await getJobs()
        setJobs(data)
    }
    function handleEdit(job: Job) {
        setEditingJob(job)
        setIsCreateModalOpen(true)
    }

    async function handleUpdate(job: Job) {
        await updateJob(job)
        await loadJobs()

        setEditingJob(null)
        setIsCreateModalOpen(false)
    }

    function handleOpenCreateModal() {
        setIsCreateModalOpen(true)
    }

    function handleCloseCreateModal() {
        setIsCreateModalOpen(false)
        setEditingJob(null)
    }
    async function handleCreate(job: Omit<Job, "id">) {
        await createJob(job)
        await loadJobs()
        setIsCreateModalOpen(false)
    }
    async function handleReject(job: Job) {
        await updateJob({
            ...job,
            status: "Rejected"
        })

        await loadJobs()
        console.log("çalışıyor")
    }

    async function handleNextStep(job: Job) {
        let nextStatus: Job["status"]

        switch (job.status) {
            case "Saved Jobs":
                nextStatus = "Applied"
                break

            case "Applied":
                nextStatus = "Interview"
                break

            case "Interview":
                nextStatus = "Offer"
                break

            case "Offer":
                nextStatus = "Accepted"
                break

            case "Accepted":
            case "Rejected":
                return
        }

        await updateJob({
            ...job,
            status: nextStatus
        })

        await loadJobs()
    }

    async function handleDelete(id: string) {
        await deleteJob(id)
        await loadJobs()
    }

    return (
        <div className="h-full w-full items-center bg-gray-950">
            <div className="px-10 py-6 text-white">

                <button
                    className="my-2 cursor-pointer rounded-md border bg-blue-950 px-6 py-2 hover:bg-blue-900"
                    onClick={handleOpenCreateModal}
                >
                    Create New Job
                </button>

                <div className="flex flex-row gap-3">
                    {statuses.map((status) => (
                        <StatusCategory
                            key={status}
                            jobs={jobs}
                            status={status}
                            onDelete={handleDelete}
                            onNext={handleNextStep}
                            onReject={handleReject}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>

            </div>

            {isCreateModalOpen && (
                <JobCreateModal
                    key={editingJob?.id ?? "create"}
                    onClose={handleCloseCreateModal}
                    onCreate={handleCreate}
                    onUpdate={handleUpdate}
                    editingJob={editingJob}
                />
            )}
        </div>
    )
}

export default Jobs