import React from "react";
import { useHomeHook } from "../hooks/useHomeHook";

const RecentEntries = ({ openEntryDetailsFn }) => {
  let { navigate, data, isPending } = useHomeHook();

  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="lg:text-2xl  text-lg font-bold text-gray-800">
          Recent Journal Entries
        </h2>

        <button
          onClick={() => navigate("/home/create")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition text-sm"
        >
          Create Entry
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_120px] gap-4 border-b border-gray-200 py-4 font-semibold text-left text-sm lg:text-base">
          <div>Topic</div>
          <div>Difficulty</div>
          <div>Duration</div>
          <div>Date</div>
          <div>Action</div>
        </div>

        {/* Loading */}
        {isPending ? (
          <div className="w-full flex items-center justify-center py-16 gap-3">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
            <h1 className="text-lg md:text-xl font-semibold">Loading...</h1>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            {data?.recentTopics.map((entry) => (
              <div
                key={entry._id}
                className="border border-gray-200 rounded-2xl p-4 md:p-5 hover:bg-gray-50 transition-all duration-200"
              >
                {/* Desktop / Tablet */}
                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_120px] gap-4 items-center">
                  {/* Topic */}
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{entry.topic}</p>
                  </div>

                  {/* Difficulty */}
                  <div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs lg:text-sm font-medium ${
                        entry.difficulty === "easy"
                          ? "bg-green-100 text-green-700"
                          : entry.difficulty === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {entry.difficulty}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="text-sm lg:text-base">
                    {entry.duration} hrs
                  </div>

                  {/* Date */}
                  <div className="text-gray-500 text-sm lg:text-base truncate">
                    {entry.date}
                  </div>

                  {/* Action */}
                  <div>
                    <button
                      onClick={() => openEntryDetailsFn(entry)}
                      className="w-full lg:w-auto px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
                    >
                      View
                    </button>
                  </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex flex-col gap-4">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-1">Topic</p>

                      <h3 className="font-semibold text-base break-words">
                        {entry.topic}
                      </h3>
                    </div>

                    <span
                      className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                        entry.difficulty === "easy"
                          ? "bg-green-100 text-green-700"
                          : entry.difficulty === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {entry.difficulty}
                    </span>
                  </div>

                  {/* Middle */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>

                      <p className="font-medium text-sm">
                        {entry.duration} hrs
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Date</p>

                      <p className="font-medium text-sm truncate">
                        {entry.date}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => openEntryDetailsFn(entry)}
                    className="w-full py-2.5 rounded-xl bg-black text-white font-medium active:scale-[0.98] transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentEntries;
