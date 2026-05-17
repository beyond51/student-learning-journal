import { BookOpen, Clock, Flame, NotebookPen, Search } from "lucide-react";
import StatsCard from "./StatsCard";
import RecentEntries from "./RecentEntries";
import { useHomeHook } from "../hooks/useHomeHook";

const Home = () => {
  let { openEntryDetailsFn } = useHomeHook();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Student Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Track your learning journey and daily progress
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCard />

      {/* Recent Entries */}
      <RecentEntries openEntryDetailsFn={openEntryDetailsFn} />
    </div>
  );
};

export default Home;
