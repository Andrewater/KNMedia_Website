import { manualInstagramPosts } from "@/lib/instagram-posts";

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  permalink?: string;
  thumbnail_url?: string;
  timestamp?: string;
};

const instagramUrl = "https://www.instagram.com/knmedia.co.nz/";

async function getInstagramPosts() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    return [];
  }

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
    limit: "6",
    access_token: accessToken,
  });

  try {
    const response = await fetch(`https://graph.instagram.com/v21.0/${userId}/media?${params}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as { data?: InstagramMedia[] };
    return payload.data ?? [];
  } catch {
    return [];
  }
}

function getPostLabel(post: InstagramMedia) {
  const caption = post.caption?.trim();

  if (caption) {
    return caption.length > 96 ? `${caption.slice(0, 93)}...` : caption;
  }

  if (post.timestamp) {
    return `KN Media Instagram post from ${new Intl.DateTimeFormat("en-NZ", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(post.timestamp))}`;
  }

  return "KN Media Instagram post";
}

export async function InstagramFeed() {
  const posts = await getInstagramPosts();
  const fallbackTiles = Array.from({ length: 6 }, (_, index) => index + 1);
  const manualPosts = manualInstagramPosts.slice(0, 6);

  return (
    <section className="instagram-section" aria-labelledby="instagram-title">
      <div className="instagram-heading">
        <p className="kicker">Instagram</p>
        <h2 id="instagram-title">Latest from KN Media.</h2>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          @knmedia.co.nz
        </a>
      </div>

      {posts.length > 0 ? (
        <div className="instagram-grid">
          {posts.slice(0, 6).map((post) => {
            const mediaUrl = post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url;

            return (
              <a className="instagram-post" href={post.permalink || instagramUrl} target="_blank" rel="noreferrer" key={post.id}>
                {mediaUrl ? <img src={mediaUrl} alt={getPostLabel(post)} loading="lazy" /> : null}
                <span>View on Instagram</span>
              </a>
            );
          })}
        </div>
      ) : manualPosts.length > 0 ? (
        <div className="instagram-grid">
          {manualPosts.map((post) => (
            <a className="instagram-post" href={post.permalink} target="_blank" rel="noreferrer" key={post.id}>
              <img src={post.imageUrl} alt={post.alt} loading="lazy" />
              <span>View on Instagram</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="instagram-grid instagram-grid-empty" aria-label="Instagram feed preview">
          {fallbackTiles.map((tile) => (
            <a className="instagram-post instagram-post-empty" href={instagramUrl} target="_blank" rel="noreferrer" key={tile}>
              <span>KN Media</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
