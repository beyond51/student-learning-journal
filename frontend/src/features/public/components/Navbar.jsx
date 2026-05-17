import React from "react";
import { useLogin } from "../hooks/useLogin";

const Navbar = () => {
  let { navigateToAuthFn } = useLogin();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl lg:text-3xl md:text-3xl sm:text-3xl font-bold tracking-tight text-blue-600">
            Student Journal
          </h1>
          <p className="text-xs lg:text-lg md:text-lg sm:text-sm text-slate-500">
            Track your daily learning journey
          </p>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={navigateToAuthFn}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition"
          >
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
