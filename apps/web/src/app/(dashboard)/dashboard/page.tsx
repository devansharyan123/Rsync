import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import LogoutButton from "@/components/logout-button";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/signin");
    }

    return (
        <div className="flex min-h-screen bg-[#1a1a1a]">
            {/* Left Sidebar */}
            <aside className="w-64 bg-[#0f0f0f] border-r border-gray-800 p-6">
                <div className="mb-8">
                    <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-4">
                        {session.user?.name || "User"}&apos;s Workspace
                    </h2>
                </div>

                <nav className="space-y-2">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-3">Menu</div>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </a>
                    <a href="#" className="flex items-center gap-3 text-white bg-gray-800 px-3 py-2 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        My Library
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Notifications
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Billing
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                    </a>
                </nav>

                <div className="mt-8">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-3">Workspaces</div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-400 px-3 py-2 rounded-lg">
                            <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">P</div>
                            <span className="text-sm">Prodigies Unive...</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 px-3 py-2 rounded-lg">
                            <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">S</div>
                            <span className="text-sm">SAAS Prodigies</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 px-3 py-2 rounded-lg">
                            <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">F</div>
                            <span className="text-sm">Fitness Prodigies</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8">
                    <LogoutButton />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {/* Header */}
                <header className="bg-[#1a1a1a] border-b border-gray-800 px-8 py-6 flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Personal</p>
                        <h1 className="text-3xl font-bold text-white">My Library</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Upload
                        </button>
                        <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Record
                        </button>
                    </div>
                </header>

                {/* Tabs */}
                <div className="px-8 pt-6 border-b border-gray-800">
                    <div className="flex gap-6">
                        <button className="pb-3 border-b-2 border-blue-500 text-white font-medium">Videos</button>
                        <button className="pb-3 text-gray-400 hover:text-white">Archive</button>
                    </div>
                </div>

                {/* Content */}
                <div className="px-8 py-8">
                    {/* Folders Section */}
                    <section className="mb-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                                <h2 className="text-lg font-semibold">Folders</h2>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 text-gray-400 hover:text-white text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Create a folder
                                </button>
                                <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm">
                                    See all
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                            {['Client outreach', 'Changed', 'Prodigies University', 'Untitled', 'Courses'].map((folder, idx) => (
                                <div key={idx} className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition cursor-pointer">
                                    <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                    <h3 className="text-white text-sm font-medium mb-1">{folder}</h3>
                                    <p className="text-gray-500 text-xs">{idx === 0 ? '1' : idx === 1 ? '1' : '0'} videos</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Videos Section */}
                    <section>
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <h2 className="text-lg font-semibold">Videos</h2>
                        </div>

                        {/* Empty State */}
                        <div className="border-2 border-dashed border-gray-800 rounded-lg py-20 flex flex-col items-center justify-center">
                            <svg className="w-16 h-16 text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-400 text-lg mb-1">No recordings found</p>
                            <p className="text-gray-600 text-sm">Start by using the Rsync Desktop App to create your first recording</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}