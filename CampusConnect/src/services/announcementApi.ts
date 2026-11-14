
export type ApiAnnouncement = {
  id: number;
  title: string;
};

export async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();

    return data as ApiAnnouncement[];
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}
