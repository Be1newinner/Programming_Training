import React from "react";
import Card from "./Card";

export default function ProductSection() {
  // const cards = [];

  return (
    <main className="">
      <h1>Our Categories</h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {Array.from({ length: 50 }, (_, index) => ({ id: index })).map(
          (item) => (
            <Card key={item?.id} />
          )
        )}
      </div>
    </main>
  );
}
