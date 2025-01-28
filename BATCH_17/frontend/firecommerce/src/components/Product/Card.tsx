import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Card() {
  return (
    <div className="border-gray border-2 font-blue-500 shadow-md rounded-md w-80">
      <Image
        src="/images/flower.webp"
        alt="flower"
        width={250}
        height={250}
        className="h-80 w-full"
      />
      <div className="p-8">
        <p>Electronics</p>
        <Link href="view">View Products</Link>
      </div>
    </div>
  );
}
