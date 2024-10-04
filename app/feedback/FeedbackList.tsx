'use server';

import React from 'react';
import FeedbackCard from './FeedbackCard';
import { FeedbackCardType } from '@/types/FeedbackType';

export default async function FeedbackList() {
  const getFeedback = async () => {
    const data = await fetch(`http://localhost:4000/feedbacks`);
    return data.json();
  };

  const allFeedbacks = await getFeedback();
  console.log(allFeedbacks);
  console.log('test');
  return (
    <main className='container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-10'>
      {allFeedbacks.map((item: FeedbackCardType) => (
        <FeedbackCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          type={item.type}
          feedbackOn={item.feedbackOn}
          gears={item.gears}
          eventDate={item.eventDate}
        />
      ))}
    </main>
  );
}
