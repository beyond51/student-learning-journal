import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  BookOpen,
  BadgeAlert,
} from "lucide-react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { singleEntryApi } from "../../shared/apis/SingleEntryApi";
import EditModel from "../../shared/components/EditModel";
import { deleteEntryApi } from "../../features/Journal/apis/DeleteEntryApi";

const EntryDetails = ({
  editEntryFn,
  existEntryData,
  setExistEntryData,
  toggleEdit,
  setToggleEdit,
}) => {
  const { id } = useParams();
  let navigate = useNavigate();

  let { data, isPending } = useQuery({
    queryKey: ["entry", id],
    queryFn: () => singleEntryApi(id),
    staleTime: 10000,
  });
  const mutation = useMutation({
    mutationFn: () => deleteEntryApi(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["entries"] });
    },
  });
  let deleteFn = async () => {
    mutation.mutate();
    navigate("/home/journal");
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-500">Entry Not Found</h1>

          <Link
            to="/journal"
            className="inline-block mt-5 bg-indigo-600 text-white px-5 py-3 rounded-2xl"
          >
            Back To Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/home/journal"
          className="inline-flex items-center gap-2 text-indigo-600 hover:underline mb-6"
        >
          <ArrowLeft size={20} />
          Back To Journal
        </Link>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center px-10">
            <div>
              <h1 className="text-4xl font-bold text-white">{data?.topic}</h1>

              <p className="text-indigo-100 mt-3">Learning Entry Details</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-gray-50 rounded-2xl p-5">
                <div className="flex items-center gap-3 text-indigo-600 mb-3">
                  <CalendarDays />
                  <h2 className="font-semibold">Date</h2>
                </div>

                <p className="text-gray-700">{data.date}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <div className="flex items-center gap-3 text-blue-600 mb-3">
                  <Clock />
                  <h2 className="font-semibold">Duration</h2>
                </div>

                <p className="text-gray-700">{data.duration} Hours</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <div className="flex items-center gap-3 text-red-500 mb-3">
                  <BadgeAlert />
                  <h2 className="font-semibold">Difficulty</h2>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    data.difficulty === "easy"
                      ? "bg-green-100 text-green-600"
                      : data.difficulty === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {data?.difficulty}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5 text-indigo-600">
                <BookOpen size={28} />

                <h2 className="text-2xl font-bold">Learning Description</h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                {data.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button
                onClick={() => editEntryFn(data)}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold transition"
              >
                Edit Entry
              </button>

              <button
                onClick={deleteFn}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition"
              >
                Delete Entry
              </button>
            </div>
          </div>
        </div>
      </div>
      {toggleEdit && (
        <EditModel existEntryData={existEntryData} editEntryFn={editEntryFn} />
      )}
    </div>
  );
};

export default EntryDetails;
