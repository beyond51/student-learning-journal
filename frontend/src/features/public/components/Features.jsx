import React from "react";

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Powerful Features for Students
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Everything you need to manage your learning effectively.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Daily Journals",
            desc: "Write and manage daily learning notes and progress.",
          },
          {
            title: "Search & Filters",
            desc: "Quickly find entries using topics and keywords.",
          },
          {
            title: "Analytics",
            desc: "Track your learning consistency and study habits.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
              📘
            </div>

            <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>

            <p className="mt-3 leading-7 text-slate-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
