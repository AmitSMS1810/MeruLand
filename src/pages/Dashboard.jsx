import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 bg-gray-50 flex-1">
          <h1 className="text-2xl font-semibold">
            Welcome to Dashboard
          </h1>
        </main>
      </div>
    </div>
  );
}