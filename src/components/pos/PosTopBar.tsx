"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Store, Monitor, User, Moon } from "lucide-react";
import Link from "next/link";

export function PosTopBar() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-PH", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
      setDate(
        now.toLocaleDateString("en-PH", {
          month: "long",
          day: "numeric",
          year: "numeric",
          weekday: "long",
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="h-14 shrink-0 bg-surface-muted/95 backdrop-blur border-b border-border flex items-center justify-between px-4 md:px-6 z-10">
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-primary font-headline font-semibold text-sm hover:bg-primary-light px-3 py-1.5 rounded-lg transition-colors shrink-0 active:scale-95 duration-150"
        >
          <ArrowLeft size={15} strokeWidth={2.5} />
          <span className="hidden sm:inline">Back to Dashboard</span>
        </Link>

        <div className="h-5 w-px bg-border hidden sm:block" />

        <div className="flex flex-col min-w-0">
          <span className="font-headline font-bold text-text-primary text-base leading-none">
            TiwalaRx POS
          </span>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-text-muted">
              <Store size={10} />
              SM City Branch
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-text-muted">
              <Monitor size={10} />
              Counter 1
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="flex-col items-end hidden sm:flex">
          <span className="font-headline font-bold text-primary text-base leading-none">
            {time}
          </span>
          <span className="text-[10px] text-text-muted mt-0.5">{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-col items-end hidden sm:flex">
            <span className="text-xs font-semibold text-text-primary leading-none">
              Quinn Audrey Santos
            </span>
            <span className="flex items-center gap-1 text-[10px] text-info bg-info/10 px-2 py-0.5 rounded-full mt-0.5">
              <Moon size={10} strokeWidth={3} />
              Graveyard Shift
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
            <User size={16} className="text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
