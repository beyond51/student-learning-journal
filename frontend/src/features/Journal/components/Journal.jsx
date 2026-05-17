import { Clock, CalendarDays, BookOpen } from "lucide-react";
import EntryCard from "./EntryCard";
import EditModel from "../../../shared/components/EditModel";
import { useJournalHook } from "../hooks/useJournalHook";

const Journal = ({
  editEntryFn,
  existEntryData,
  setExistEntryData,
  toggleEdit,
  setToggleEdit,
}) => {
  let { data, isPending, navigate, deleteFn } = useJournalHook();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            My Learning Journal
          </h1>

          <p className="text-gray-500 mt-2">
            Track and manage your learning entries
          </p>
        </div>

        <button
          onClick={() => {
            navigate("/home/create");
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl shadow-md transition"
        >
          + Create Entry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {isPending ? (
          <div className="h-[50%] w-screen flex items-center justify-center ">
            <div className="flex items-center justify-center p-6">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
            </div>
            <h1 className="text-xl font-semibold  ">loading...</h1>
          </div>
        ) : (
          data?.data?.data?.map((entry) => (
            <EntryCard
              key={entry._id}
              entry={entry}
              editEntryFn={editEntryFn}
              deleteFn={deleteFn}
            />
          ))
        )}
      </div>
      {toggleEdit && (
        <EditModel existEntryData={existEntryData} editEntryFn={editEntryFn} />
      )}
    </div>
  );
};

export default Journal;
