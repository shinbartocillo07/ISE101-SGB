
export type AnnouncementCategory =
  | 'Academic'
  | 'Events'
  | 'Notice'
  | 'Community';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  read: boolean;
}
