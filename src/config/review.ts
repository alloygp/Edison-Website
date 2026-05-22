export const PASTEL_BASE = 'https://usepastel.com/link/4rdqpv73/#'; // ← Pastel share base URL
export const TICKET_ID   = '';                    // ← set by skill each review

export interface ReviewItem {
  label: string;
  path: string;
  review: boolean;
}

export const REVIEW_ITEMS: ReviewItem[] = [
  // Pages will be set by the review-widget-setup skill each session
];
