
import type { Announcement } from '../types/announcement';

export function getUnreadAnnouncements(
  items: Announcement[]
): Announcement[] {
  return items.filter(item => !item.read);
}
export function sumNumbers(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}