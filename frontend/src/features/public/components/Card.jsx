import React from "react";

const Card = () => {
  return (
    <div className="mt-6 space-y-4">
      <div className="rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Redux Toolkit Notes</h4>
          <span className="text-xs text-slate-500">Medium</span>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          Learned slices, store configuration, async thunks, and reducers.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">MongoDB Search</h4>
          <span className="text-xs text-slate-500">Easy</span>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          Practiced regex search, query params, and filtering APIs.
        </p>
      </div>

      <div className="rounded-2xl bg-blue-600 p-5 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold">Learning Streak</h4>
            <p className="mt-1 text-sm text-blue-100">
              Keep your daily consistency alive.
            </p>
          </div>

          <div className="text-4xl font-bold">12🔥</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
