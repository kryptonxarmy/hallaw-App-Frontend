"use client";

import { Home, MessageCircle, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Footer() {
  const currentRoute = usePathname();

  return (
    <div className="h-[8vh] bg-white fixed bottom-0 w-full flex justify-around items-center rounded-t-[2rem]">
      <div className="flex justify-around w-full">
        <Link href="/">
          <Home className={`size-[2em] ${currentRoute === "/" ? "text-sky-300 drop-shadow-md" : ""}`} />
        </Link>
        <Link href="/pages/chat">
          <MessageCircle className={`size-[2em] ${currentRoute === "/pages/chat" ? "text-sky-300 drop-shadow-md" : ""}`} />
        </Link>
        <Link href="/pages/profile">
          <UserCircle className={`size-[2em] ${currentRoute === "/pages/profile" ? "text-sky-300 drop-shadow-md" : ""}`} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
