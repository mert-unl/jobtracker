import { NavLink } from "react-router"

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-500 bg-gray-900 px-12 py-6">
            <h1 className="text-3xl font-bold text-white">
                JobsTracker
            </h1>

            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                <NavLinkStyle to="/" title="Dashboard" />
                <NavLinkStyle to="/jobs" title="Jobs" />
            </div>


            <div className="flex flex-row gap-3 items-center align-middle">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>



                <img src="https://picsum.photos/200" className="rounded-full size-8" />
                <h3 className="font-bold text-white">Mert ÜNAL</h3>

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
                `rounded-sm px-6 py-2 text-gray-300 transition ${isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "hover:bg-blue-900"
                }`
            }
        >
            {title}
        </NavLink>
    )
}

export default Navbar