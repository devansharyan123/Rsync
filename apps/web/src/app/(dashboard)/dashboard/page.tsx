import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage(){

    const session = await getServerSession();

    if(!session){
        redirect("/signin")
    }

    return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {session.user?.name || "User"}
            </h1>
            <p className="text-gray-600">Here are your recent recordings.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            New Recording
          </button>
        </header>

        {/* Placeholder for future Video List component */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-400">
          No recordings found. Start by using the Rsync Desktop App.
        </div>
      </div>
    </div>
  );
}