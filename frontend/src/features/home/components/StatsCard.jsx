import { BookOpen, Clock, Flame, NotebookPen } from "lucide-react";
import React from "react";
import { useHomeHook } from "../hooks/useHomeHook";

const StatsCard = () => {
  let { data, isPending } = useHomeHook();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Entries</p>

            <h2 className="text-3xl font-bold mt-2">
              {isPending ? 0 : data?.totalEntries}
            </h2>
          </div>

          <div className="bg-indigo-100 p-4 rounded-2xl">
            <NotebookPen className="text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Study Hours</p>

            <h2 className="text-3xl font-bold mt-2">
              {isPending ? 0 : data?.totalStudyHours}
            </h2>
          </div>

          <div className="bg-blue-100 p-4 rounded-2xl">
            <Clock className="text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Topics Learned</p>

            <h2 className="text-3xl font-bold mt-2">
              {isPending ? 0 : data?.recentTopics.length}
            </h2>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl">
            <BookOpen className="text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Learning Streak</p>

            <h2 className="text-3xl font-bold mt-2">12 Days</h2>
          </div>

          <div className="bg-red-100 p-4 rounded-2xl">
            <Flame className="text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
