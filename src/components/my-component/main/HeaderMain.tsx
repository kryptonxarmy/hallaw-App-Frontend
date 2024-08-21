"use client";

import { Bell, Hand } from "lucide-react";
import React, { useState } from "react";

function HeaderMain() {
  const [activeTab, setActiveTab] = useState("FYP");

  return (
    <>
      <div className="h-[11vh] w-full bg-white fixed z-[99] flex flex-col justify-end items-end shadow-md shadow-sky-300/30">
        <div className="w-full">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold text-center">Hallaw</h1>
            <Hand size={32} className="text-red-600 rotate-12"/>
          </div>
          <div className="mx-auto flex justify-center rounded-md ">
            <button onClick={() => setActiveTab("FYP")} className={`p-[2px] w-1/2 ${activeTab === "FYP" ? "font-bold border-b-2 border-sky-300" : ""}`}>
              <h1 className="text-sm">FYP</h1>
            </button>
            <button onClick={() => setActiveTab("Mengikuti")} className={`p-[2px] w-1/2 ${activeTab === "Mengikuti" ? "font-bold border-b-2 border-sky-300" : ""}`}>
              <h1 className="text-sm">Mengikuti</h1>
            </button>
          </div>
        </div>
      </div>

      {/* Render content based on the selected tab */}
      <div className="pt-[12vh]">
        {activeTab === "FYP" && <div></div>}
        {activeTab === "Mengikuti" && (
          <div>
            {/* Mengikuti page content */}
            <h2>Welcome to the Mengikuti section!</h2>
            {/* Add more content here */}
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderMain;
