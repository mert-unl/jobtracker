import { NavLink } from "react-router"

function Navbar() {
    return (
        <nav className="flex justify-center gap-4 bg-gray-900 px-6 py-5">
            <NavLinkStyle to="/" title="Dashboard" />
            <NavLinkStyle to="/jobs" title="Jobs" />
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
                    ? "bg-blue-700"
                    : "hover:bg-blue-900"
                }`
            }
        >
            {title}
        </NavLink>
    )
}

export default Navbar