import React from "react";
import Card from "./Card";

const RightContent = () => {
  return (
    <div className="relative">
      <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-2xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-semibold">Today's Learning</h3>
            <p className="text-sm text-slate-500">React & Redux Toolkit</p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Completed
          </span>
        </div>

        {/* Cards */}
        <Card />
      </div>

      {/* Floating Blur */}
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
    </div>
  );
};

export default RightContent;
