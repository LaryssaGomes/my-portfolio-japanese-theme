"use client";
import { useEffect } from "react";
import { applyDayTime } from "@/lib/time-of-day";

export const TimeThemeUpdater = () => {
  useEffect(() => {
    applyDayTime();
    const interval = setInterval(applyDayTime, 60_000);
    return () => clearInterval(interval);
  }, []);

  return null;
};
