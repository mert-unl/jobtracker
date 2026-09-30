interface StatusRowProps {
    title: string
    value: number
}

export default function StatusRow({ title, value }: StatusRowProps) {
    return (
        <div className="flex items-center justify-between border-b border-gray-800 py-3 last:border-0">
            <span className="text-gray-300">
                {title}
            </span>

            <span className="font-semibold">
                {value}
            </span>
        </div>
    )
}
