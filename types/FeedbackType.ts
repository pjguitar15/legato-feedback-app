export type FeedbackType = {
  id: string;
  title: string;
  description: string;
  type: 'complain' | 'feedback';
  feedbackOn: 'gears' | 'service';
  gears: GearType;
  eventDate: Date;
  images: { url: string; description: string }[];
  actionTaken?: string;
  clientName?: string;
  contactInfo?: string;
};

type GearType = {
  gearUsed: string;
  condition: 'excellent' | 'good' | 'needs maintenance' | 'broken';
  soundQualityRating: 1 | 2 | 3 | 4 | 5;
  issueExperienced: string[];
};

export type FeedbackCardType = {
  id: string;
  title: string;
  description: string;
  type: 'complain' | 'feedback';
  feedbackOn: 'gears' | 'service';
  gears: GearType;
  eventDate: Date;
};
