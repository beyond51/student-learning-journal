import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div>
          <h3 className="text-lg font-bold text-blue-600">Student Journal</h3>
          <p className="text-sm text-slate-500">
            Built for modern students and learners.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
