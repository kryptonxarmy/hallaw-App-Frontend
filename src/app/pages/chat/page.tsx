import Footer from "@/components/my-component/Footer";
import HeaderChat from "@/components/my-component/chat/HeaderChat";
import RoomChat from "@/components/my-component/chat/RoomChat";
import { Plus } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div className="min-h-screen w-full bg-sky-100/40 flex flex-col">
        <HeaderChat />
        <RoomChat />
        <Footer />
      </div>
    </>
  );
}

export default page;
