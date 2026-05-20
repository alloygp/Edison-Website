/**
 * Insurance Video Library content.
 *
 * To swap videos: replace the `id` strings (the YouTube video ID, the
 * part after v= or youtu.be/ in a YouTube URL). Thumbnails are loaded
 * automatically from i.ytimg.com using the ID.
 *
 * View counts and "X months ago" timestamps are static. See the handoff
 * doc for the YouTube Data API v3 approach if live counts are needed.
 */

export type Video = {
  id: string;
  title: string;
  duration: string;
  views: string;
  posted: string;
  description?: string;
};

export type InsuranceVideoLibraryData = {
  source: string;
  hostName: string;
  channelHref: string;
  featured: Video;
  more: Video[];
};

export const INSURANCE_VIDEOS: InsuranceVideoLibraryData = {
  source: "Policy Party Podcast",
  hostName: "Phil Negar",
  channelHref: "https://www.youtube.com/@PhilNegar",

  featured: {
    id: "K4MkKMabDy4",
    title: "The Real Difference Between Unit Owner and Association Coverage",
    duration: "10:47",
    views: "227",
    posted: "1 month ago",
    description:
      "HO6 vs. master policy in plain English, where the unit owner's coverage ends and the association's begins, and what falls through the gap."
  },

  more: [
    {
      id: "M3iuayQbiVI",
      title: "How Condo Associations Should Deal with Water Damage",
      duration: "6:55",
      views: "172",
      posted: "6 months ago"
    },
    {
      id: "p3KDiJb6hb0",
      title: "A New Solution for HOA: Landscaping Damage Coverage",
      duration: "9:33",
      views: "169",
      posted: "4 months ago"
    },
    {
      id: "JoDbSxtzneg",
      title: "Pollution Liability Explained: Why HOAs Need Coverage Before Disaster Strikes",
      duration: "9:47",
      views: "92",
      posted: "4 months ago"
    }
  ]
};
