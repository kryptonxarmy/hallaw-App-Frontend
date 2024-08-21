import { PlusCircle } from "lucide-react";
import React from "react";

function HeaderChat() {
  return (
    <>
      <div className="h-[10vh] bg-white flex flex-col justify-end shadow-sky-300/30 items-end shadow-xl">
        <div className="flex justify-between w-full p-4">
          <h1 className="text-3xl font-bold">Chat</h1>
        </div>
      </div>
    </>
  );
}

export default HeaderChat;
