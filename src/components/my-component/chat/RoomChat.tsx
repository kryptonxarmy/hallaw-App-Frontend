import React from "react";
import Chat from "./Chat";
import { Plus, Search } from "lucide-react";
import HeaderChat from "./HeaderChat";
import { Input } from "@/components/ui/input";

function RoomChat() {
  return (
    <div className="relative h-[80vh] overflow-auto">
      <div className="py-3 relative mb-4 px-4">
        <Input type="text" className="border-sky-300" placeholder="maow Nyari Apahh" />
        <Search className="absolute top-4 right-5 text-sky-300"/>
      </div>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <div className="absolute bottom-4 right-4 cursor-pointer bg-white shadow-xl rounded-full p-2">
        <Plus size={32} className="text-red-600" />
      </div>
    </div>
  );
}

export default RoomChat;
