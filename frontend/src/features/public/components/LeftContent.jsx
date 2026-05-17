import React from "react";

const LeftContent = () => {
  return (
    <div>
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
        Smart Learning Tracker
      </span>

      <h2 className="mt-6 text-3xl lg:text-5xl md:text-4xl sm:text-3xl font-bold leading-tight text-slate-900">
        Organize Your Learning Journey Efficiently
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Create journals, track progress, manage topics, analyze study habits,
        and improve your consistency with a modern student learning journal.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition">
          Start Writing
        </button>

        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-100 transition">
          Explore Features
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-blue-600">5K+</h3>
          <p className="mt-1 text-sm text-slate-500">Journal Entries</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-blue-600">1K+</h3>
          <p className="mt-1 text-sm text-slate-500">Students</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-blue-600">95%</h3>
          <p className="mt-1 text-sm text-slate-500">Consistency</p>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
