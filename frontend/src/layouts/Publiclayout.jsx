import React from "react";
import Navbar from "../features/public/components/Navbar";
import LeftContent from "../features/public/components/LeftContent";
import RightContent from "../features/public/components/RightContent";
import Features from "../features/public/components/Features";
import Footer from "../features/public/components/Footer";

const Publiclayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}

        <LeftContent />

        {/* Right Content */}
        <RightContent />
      </section>

      {/* Features */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Publiclayout;
