import { FeedbackType } from '@/types/FeedbackType';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const FeedbackContent = async ({ id }: { id: string }) => {
  const getSingleContent = async (id: string) => {
    const data = await fetch(`http://localhost:4000/feedbacks`);
    const allData = await data.json();
    const findData = allData.filter((item: FeedbackType) => item.id === id);
    if (!findData) return 'not found';

    return findData[0];
  };

  const data = await getSingleContent(id);
  console.log(data);
  return (
    <main className='container mx-auto py-12'>
      <div className='flex flex-col gap-3'>
        <h1 className='scroll-m-20 text-3xl font-semibold tracking-tight'>
          Speakers too Quiet
        </h1>
        <p className='leading-7'>
          The sound from the speakers was too low for the audience to hear
          clearly at the back.
        </p>
        <div className='flex gap-4 items-center'>
          <div className='leading-7'>
            Type: <Badge variant='outline'>Complain</Badge>
          </div>
          <Separator
            className='h-5'
            orientation='vertical'
          />
          <div className='leading-7'>
            Feedback on: <Badge variant='outline'>Gears</Badge>
          </div>
        </div>
        <div className='flex gap-4 items-center flex-wrap'>
          {[
            { label: 'Gear', value: 'Yamaha DXR10' },
            { label: 'Condition', value: 'Good' },
            { label: 'Quality Rating', value: '3' },
            { label: 'Issue Experienced', value: 'Low Volume' },
          ].map((item, index, array) => (
            <InlineBadge
              key={index}
              label={item.label}
              value={item.value}
              isLast={index === array.length - 1}
            />
          ))}
        </div>
        <Separator />
        <p className='leading-7 '>Event Date: 2024-08-25</p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {[
            {
              url: 'https://image.made-in-china.com/226f3j00bQvEJiuqbFkY/Live-Event-Outdoor-Concert-Stadium-PA-Speakers-China-High-End-Sound-System.webp',
              description:
                'Despite the impressive setup, the sound clarity was lacking during the performance. Audience members reported difficulty in hearing the vocals clearly, which affected their overall experience.',
            },
            {
              url: 'https://image.made-in-china.com/226f3j00bQvEJiuqbFkY/Live-Event-Outdoor-Concert-Stadium-PA-Speakers-China-High-End-Sound-System.webp',
              description:
                'The bass levels were overwhelming, drowning out the vocals and instrumentals. Many attendees commented on the muddiness of the sound, which took away from the overall enjoyment of the concert.',
            },
            {
              url: 'https://image.made-in-china.com/226f3j00bQvEJiuqbFkY/Live-Event-Outdoor-Concert-Stadium-PA-Speakers-China-High-End-Sound-System.webp',
              description:
                'There were frequent sound dropouts during key moments of the show, causing frustration among both the performers and the audience. It disrupted the flow of the event and left some songs feeling incomplete.',
            },
            {
              url: 'https://image.made-in-china.com/226f3j00bQvEJiuqbFkY/Live-Event-Outdoor-Concert-Stadium-PA-Speakers-China-High-End-Sound-System.webp',
              description:
                'Feedback issues arose from the stage, especially during quieter songs. This led to several moments where the audience had to cover their ears due to the piercing sound, making it uncomfortable for everyone present.',
            },
            {
              url: 'https://image.made-in-china.com/226f3j00bQvEJiuqbFkY/Live-Event-Outdoor-Concert-Stadium-PA-Speakers-China-High-End-Sound-System.webp',
              description:
                "Attendees were disappointed that the sound system did not live up to expectations, especially considering the venue's reputation for hosting high-quality events. Many expressed that they would think twice before attending similar events in the future.",
            },
          ].map((item, index) => (
            <div key={index}>
              <Image
                className='w-full'
                src={item.url}
                alt='complain'
                height={1200}
                width={1200}
              />
              <p className='leading-6 text-sm text-slate-200'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <Separator />
        <div className='flex gap-2 items-center'>
          <h4>Action Taken: </h4>
          <p className='text-slate-400 text-md'>
            Volume was increased midway through the event.
          </p>
        </div>
        <div className='flex gap-3 flex-wrap items-center'>
          <div className='flex gap-2 items-center'>
            <h4>Client Name: </h4>
            <p className='text-slate-400 text-md'>John Smith</p>
          </div>
          <Separator
            className='h-4'
            orientation='vertical'
          />
          <div className='flex gap-2 items-center'>
            <h4>Contact Info: </h4>
            <p className='text-slate-400 text-md'>john.smith@example.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

const InlineBadge: React.FC<{
  label: string;
  value: string;
  isLast: boolean;
}> = ({ label, value, isLast }) => {
  return (
    <div className='flex gap-4 items-center'>
      <div className='leading-7'>
        {label}: <Badge variant='outline'>{value}</Badge>
      </div>
      {!isLast && (
        <Separator
          className='h-5'
          orientation='vertical'
        />
      )}
    </div>
  );
};

export default FeedbackContent;
