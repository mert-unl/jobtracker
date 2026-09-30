interface StatCardProps {
    title: string
    value: number
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
            <p className="text-sm text-gray-400">
                {title}
            </p>

            <p className="mt-2 text-3xl font-bold">
                {value}
            </p>
        </div>
    )
}