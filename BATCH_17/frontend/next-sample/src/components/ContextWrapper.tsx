"use client";

import { CounterContextProvider } from "@/services/counter.context";
import { ReactNode } from "react";

export default function ContextWrapper({ children }: { children: ReactNode }) {
  return <CounterContextProvider>{children}</CounterContextProvider>;
}
