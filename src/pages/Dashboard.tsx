import { useEffect, useState } from "react"
import type { Job } from "../interfaces/Job"
import { getJobs } from "../services/jobService"
import StatCard from "../components/StatCard"
import StatusRow from "../components/StatusRow"


export default function Dashboard() {
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        // eslint-disable-next-line
        loadJobs()
    }, [])

    async function loadJobs() {
        const data = await getJobs()
        setJobs(data)
    }

    const totalJobs = jobs.length

    const savedJobs = jobs.filter(
        (job) => job.status === "Saved Jobs"
    ).length

    const appliedJobs = jobs.filter(
        (job) => job.status === "Applied"
    ).length

    const interviewJobs = jobs.filter(
        (job) => job.status === "Interview"
    ).length

    const offerJobs = jobs.filter(
        (job) => job.status === "Offer"
    ).length

    const acceptedJobs = jobs.filter(
        (job) => job.status === "Accepted"
    ).length

    const rejectedJobs = jobs.filter(
        (job) => job.status === "Rejected"
    ).length

    const recentJobs = [...jobs]
        .sort((a, b) => {
            if (!a.appliedDate) return 1
            if (!b.appliedDate) return -1

            return (
                new Date(b.appliedDate).getTime() -
                new Date(a.appliedDate).getTime()
            )
        })
        .slice(0, 5)

    return (
        <div className="min-h-full bg-gray-950 p-10 text-white">

            <p className="my-4 text-gray-400">
                Here is an overview of your job applications.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <StatCard
                    title="Total Jobs"
                    value={totalJobs}
                />

                <StatCard
                    title="Applied"
                    value={appliedJobs}
                />

                <StatCard
                    title="Interviews"
                    value={interviewJobs}
                />

                <StatCard
                    title="Offers"
                    value={offerJobs}
                />

            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

                <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">

                    <h2 className="mb-6 text-xl font-semibold">
                        Application Overview
                    </h2>

                    <StatusRow
                        title="Saved Jobs"
                        value={savedJobs}
                    />

                    <StatusRow
                        title="Applied"
                        value={appliedJobs}
                    />

                    <StatusRow
                        title="Interview"
                        value={interviewJobs}
                    />

                    <StatusRow
                        title="Offer"
                        value={offerJobs}
                    />

                    <StatusRow
                        title="Accepted"
                        value={acceptedJobs}
                    />

                    <StatusRow
                        title="Rejected"
                        value={rejectedJobs}
                    />

                </div>

                <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">

                    <h2 className="mb-6 text-xl font-semibold">
                        Recent Applications
                    </h2>

                    <div className="flex flex-col gap-4">

                        {recentJobs.length === 0 ? (
                            <p className="text-gray-400">
                                No jobs yet.
                            </p>
                        ) : (
                            recentJobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="flex items-center justify-between rounded-lg bg-gray-800 p-4"
                                >
                                    <div>
                                        <p className="font-semibold">
                                            {job.position}
                                        </p>

                                        <p className="text-sm text-gray-400">
                                            {job.company}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-sm text-gray-300">
                                            {job.appliedDate ?? "-"}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {job.status}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}