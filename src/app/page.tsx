import Footer from "@/components/my-component/Footer";
import LoginForm from "@/components/my-component/auth/LoginForm";
import HeaderMain from "@/components/my-component/main/HeaderMain";
import Thread from "@/components/my-component/main/Thread";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden bg-gray-100 relative">
      <HeaderMain />
      <div className="pb-[8vh]">
        <Thread />
        <Thread />
      </div>
      {/* Plus Icon fixed at the bottom-right corner */}
      <div className="fixed bottom-[5rem] right-4 cursor-pointer bg-sky-200/30 backdrop-blur-sm shadow-md shadow-sky-300/30 rounded-full p-2 z-50">
        <Plus size={32} strokeWidth={3} className="text-sky-600" />
      </div>
      <Footer />
    </main>
  );
}
