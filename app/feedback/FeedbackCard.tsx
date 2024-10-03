import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FeedbackCard() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Crew not on Uniform</CardTitle>
        <CardDescription className='text-clip'>
          {`I think you should be more professional and not disturb the events. I noticed that your crew member was not wearing your uniform either. I think that has to be changed. Just a feedback from your client. I want your company to improve.`
            .split(" ")
            .slice(0, 16)
            .join(" ") + "..."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex align-center'>
              <Label htmlFor='name'>Type: </Label>
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button>View Feedback</Button>
        {/* <Button variant='outline'>Cancel</Button> */}
      </CardFooter>
    </Card>
  );
}
