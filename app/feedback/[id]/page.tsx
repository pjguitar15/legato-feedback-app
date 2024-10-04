'use server';
import React from 'react';
import FeedbackContent from './FeedbackContent';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const page = ({ params }: Params) => {
  return (
    <div>
      <FeedbackContent id={params.id} />
    </div>
  );
};

export default page;
