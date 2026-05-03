export type ManualInstagramPost = {
  id: string;
  imageUrl: string;
  permalink: string;
  alt: string;
};

// Optional fallback when Meta API credentials are not configured.
// Add up to 6 recent posts here using local images in /public/assets/img/instagram/.
export const manualInstagramPosts: ManualInstagramPost[] = [];
