"use client";

import { usePathname } from "next/navigation";

export default function DeadOverlay({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}</>;
  return (
    <div className="flex-1 min-h-full flex flex-col w-full relative" style={{ filter: "grayscale(80%) sepia(15%)", opacity: 0.4, pointerEvents: "none" }}>
      {children}
    </div>
  );
}
