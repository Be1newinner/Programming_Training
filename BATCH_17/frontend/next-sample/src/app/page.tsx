"use client";
import { CounterContext } from "@/services/counter.context";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { counterValue } = useContext(CounterContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to My App
      </h1>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Value : {counterValue}
      </h1>
      <div className="space-y-4">
        <Link href="/counter">
          <div className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            Counter Page
          </div>
        </Link>
        <Link href="/todo">
          <div className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
            To Do Page
          </div>
        </Link>
        <Link href="/effect">
          <div className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
            Use Effect Page
          </div>
        </Link>
      </div>
    </div>
  );
}
