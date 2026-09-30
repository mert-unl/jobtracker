import type { Job } from "../interfaces/Job"
import { useState } from "react"

interface JobCreateModalProps {
    onClose: () => void
    onCreate: (job: Omit<Job, "id">) => void
    onUpdate: (job: Job) => void
    editingJob: Job | null
}

function JobCreateModal({ onClose,
    onCreate,
    onUpdate,
    editingJob }: JobCreateModalProps) {

    const [company, setCompany] = useState(editingJob?.company ?? "")
    const [position, setPosition] = useState(editingJob?.position ?? "")
    const [location, setLocation] = useState(editingJob?.location ?? "")

    const [salary, setSalary] = useState(editingJob?.salary ?? "")
    const [jobUrl, setJobUrl] = useState(editingJob?.jobUrl ?? "")
    const [notes, setNotes] = useState(editingJob?.notes ?? "")


    function handleSubmit() {
        if (editingJob) {
            onUpdate({
                ...editingJob,
                company,
                position,
                location,
                salary,
                jobUrl,
                notes
            })

            return
        }

        onCreate({
            company,
            position,
            location,
            status: "Saved Jobs",
            appliedDate: new Date().toISOString().split("T")[0],
            salary,
            jobUrl,
            notes
        })
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

            <div className="w-full max-w-lg rounded-xl border border-gray-700 bg-gray-900 p-6 text-white shadow-xl">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                        {editingJob ? "Edit Job" : "Create New Job"}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-sm text-white border border-gray-500 items-center rounded-sm bg-red-900 hover:bg-red-700 hover:cursor-pointer  px-2 py-1 hover:text-white"
                    >
                        x
                    </button>
                </div>

                <div className="flex flex-col gap-4">

                    <div>
                        <label className="mb-1 block text-sm text-gray-300">
                            Company
                        </label>

                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-gray-300">
                            Position
                        </label>

                        <input
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-gray-300">
                            Location
                        </label>

                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-gray-300">
                            Salary
                        </label>

                        <input
                            type="text"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-gray-300">
                            Job URL
                        </label>

                        <input
                            type="url"
                            value={jobUrl}
                            onChange={(e) => setJobUrl(e.target.value)}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-gray-300">
                            Notes
                        </label>

                        <textarea
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                </div>

                <div className="mt-4 flex justify-end gap-3">


                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-blue-700 px-4 py-2 hover:bg-blue-600 hover:cursor-pointer"
                    >
                        {editingJob ? "Update Job" : "Create Job"}
                    </button>

                </div>

            </div>
        </div>
    )
}

export default JobCreateModal