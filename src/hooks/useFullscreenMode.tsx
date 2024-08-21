"use client";

import { Button } from "@/components/ui/button";
import React from "react";

function useFullscreenMode() {
  const toggleFullSceen = (): void => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return <Button onClick={() => toggleFullSceen()}>Toggle full screen mode</Button>;
}

export default useFullscreenMode;
