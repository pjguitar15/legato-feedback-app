import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackList() {
  return (
    <main className='container mx-auto flex gap-3 flex-wrap'>
      {Array.from({ length: 10 }).map((item, index) => (
        <FeedbackCard key={index} />
      ))}
    </main>
  );
}
