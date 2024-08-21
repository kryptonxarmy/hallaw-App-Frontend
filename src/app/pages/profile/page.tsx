import Footer from "@/components/my-component/Footer";
import Thread from "@/components/my-component/main/Thread";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="bg-sky-300 rounded-b-[3rem] overflow-hidden">
          <div className="bg-white drop-shadow-xl pb-4 rounded-b-[3rem]">
            <div className="p-4 w-full flex items-center">
              <div className="w-[20%] flex justify-start">{/* <ArrowLeft className="" strokeWidth={3} /> */}</div>
              <div className="flex-1 flex justify-center">
                <h1 className="text-2xl text-center font-bold">Profile</h1>
              </div>
              <div className="w-[20%]"></div> {/* Empty div for balance */}
            </div>

            <div className="flex flex-col justify-center items-center w-full gap-2">
              <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-sky-300">
                <Image src="/img/profile_photo/pp.jpeg" alt="hallaw" layout="fill" style={{ objectFit: "cover" }} objectPosition="top" />
              </div>
              <h1 className="text-3xl font-bold text-center">Melda Merdina</h1>
              <p className="text-center text-gray-400">@meldamerdina</p>
              <div>
                <Button className="bg-sky-600 shadow-md border-2 border-sky-200">Edit Profile</Button>
              </div>
            </div>
          </div>
          <div className="bg-sky-300 pt-5 pb-4 rounded-b-[2rem] flex text-white justify-center gap-6">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl">1</h1>
              <p className="text-lg">Follower</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl">1</h1>
              <p className="text-lg">Following</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl">10</h1>
              <p className="text-lg">Thread</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Thread />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
