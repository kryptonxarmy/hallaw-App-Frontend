"use client";

import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function Thread() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="py-4 px-2 shadow-xl shadow-sky-300/30 bg-white rounded-2xl mx-2 my-4">
        <div className="flex justify-start items-start">
          <div className="w-[12%] flex justify-center items-center">
            <div className="h-10 w-10 rounded-full relative overflow-hidden">
              <Image src={"/img/profile_photo/pp.jpeg"} alt="hallaw" layout="fill" style={{ objectFit: "cover" }} objectPosition="top" />
            </div>
          </div>
          <div className=" ml-2 w-[88%] flex flex-col gap-2">
            <div className="flex text-sm justify-between">
              <div className="flex flex-col gap-0">
                <h1 className="font-bold">Melda Merdina</h1>
                <p className="text-sm">@meldamerdina</p>
              </div>
              <p className="text-sm">5 jam yang lalu</p>
            </div>
            <div>
              <p className="mb-2">Aku sayang DANUU WARDANAA🥰</p>
              <div className="w-full relative h-[16em] bg-gray-400 rounded-xl flex justify-center items-center p-2 overflow-hidden shadow-md">
                <Image src="/img/thread/haha.jpeg" layout="fill" style={{ objectFit: "cover" }} alt="hallaw" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <button onClick={handleLike}>
                  <Heart className={`${liked ? "fill-red-600" : ""}`} />
                </button>
                <p>120</p>
              </div>
              <div className="flex gap-2">
                <MessageCircle />
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Separator className="mt-3 bg-gray-300" /> */}
      </div>
    </>
  );
}

export default Thread;
