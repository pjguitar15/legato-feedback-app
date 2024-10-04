import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';
import { FeedbackCardType } from '@/types/FeedbackType';
import Link from 'next/link';

const FeedbackCard: React.FC<FeedbackCardType> = ({
  id,
  title,
  description,
  type,
  feedbackOn,
  gears,
  eventDate,
}) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='text-clip'>
          {description.split(' ').slice(0, 30).join(' ') + '..'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4 capitalize'>
            <div className='flex align-center'>
              <Label htmlFor='name'>Type: {type}</Label>
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>Feedback on: {feedbackOn}</Label>
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>
                Gear Feedback: {gears.gearUsed} | {gears.condition} |{' '}
                {gears.soundQualityRating} | {gears.issueExperienced[0]}
              </Label>
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>
                Event Date: {eventDate.toString()}
              </Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link
          href={`/feedback/${id}`}
          className={buttonVariants({ variant: 'outline' })}
        >
          View Feedback
        </Link>
        {/* <Button variant='outline'>Cancel</Button> */}
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
