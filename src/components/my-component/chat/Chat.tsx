import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

function Chat() {
  return (
    <>
      <div className="h-[15%] flex justify-between w-full">
        <div className="flex px-2 w-[80%] gap-2">
          <div className="w-[20%] flex justify-center items-center">
            <div className="h-16 relative overflow-hidden w-16 rounded-full">
              <Image src={"/img/profile_photo/pp.jpeg"} alt="hallaw" layout="fill" style={{ objectFit: "cover" }} objectPosition="top" />
            </div>
          </div>
          <div className="w-[60%%] flex flex-col justify-center ">
            <h1 className="font-bold">Melda Merdina</h1>
            <p>Aku sayang kamu babyyyy🥰</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[20%]">
          <p className="text-center text-gray-400 text-sm">10.00 AM</p>
        </div>
      </div>
      <Separator className="bg-sky-300 shadow-md shadow-sky-500 mt-2" />
    </>
  );
}

export default Chat;
