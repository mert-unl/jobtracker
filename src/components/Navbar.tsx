import { NavLink } from "react-router"

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center border-b border-gray-500 bg-gray-900 px-12 py-6">
            <h1 className="text-3xl font-bold text-white">
                JobsTracker
            </h1>

            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                <NavLinkStyle to="/" title="Dashboard" />
                <NavLinkStyle to="/jobs" title="Jobs" />
            </div>
        </nav>

    )
}

function NavLinkStyle({
    to,
    title,
}: {
    to: string
    title: string
}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `rounded-lg border px-6 py-2 text-gray-100 transition ${isActive
                    ? "bg-blue-500"
                    : "hover:bg-blue-900"
                }`
            }
        >
            {title}
        </NavLink>
    )
}

export default Navbar