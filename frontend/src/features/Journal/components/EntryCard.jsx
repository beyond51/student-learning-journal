import { BookOpen, CalendarDays, Clock } from "lucide-react";
import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import EditModel from "../../../shared/components/EditModel";
import { useJournalHook } from "../hooks/useJournalHook";
import { useGsapCardHook } from "../hooks/useGsapCardHook";

const EntryCard = ({ entry, editEntryFn = null, deleteFn = null }) => {
  let cardRef = useRef({});
  useGsapCardHook(cardRef);
  let { openEntryDetailFn, location } = useJournalHook(entry);
  return (
    <div
      ref={cardRef}
      className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{entry.topic}</h2>

          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <CalendarDays size={16} />
            {entry.date}
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            entry.difficulty === "easy"
              ? "bg-green-100 text-green-600"
              : entry.difficulty === "medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-600"
          }`}
        >
          {entry.difficulty}
        </span>
      </div>

      <p className="text-gray-600 leading-relaxed mb-5">{entry.description}</p>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Clock size={18} />

          <span>{entry.duration} hrs</span>
        </div>

        <div className="flex items-center gap-2 text-indigo-600">
          <BookOpen size={18} />

          <button onClick={openEntryDetailFn} className="hover:underline">
            View Details
          </button>
        </div>
      </div>

      {location.pathname === "/home/journal" && (
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => editEntryFn(entry)}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition"
          >
            Edit
          </button>

          <button
            onClick={() => deleteFn(entry._id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EntryCard;
