import { useQuery } from "@tanstack/react-query";
import { sanityClient, ALL_POSTS_QUERY } from "@/lib/sanityClient";
import { blogPosts as staticPosts, categories as staticCategories, type BlogPost } from "@/lib/blogData";

interface SanityPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const mapSanityPost = (post: SanityPost): BlogPost => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt || "",
  content: post.body || "",
  category: post.category || "Growth Strategy",
  author: post.author || "Boostly Team",
  date: post.date || new Date().toISOString(),
  readTime: post.readTime || "4 min read",
});

export function useSanityPosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sanity-posts"],
    queryFn: async () => {
      const posts: SanityPost[] = await sanityClient.fetch(ALL_POSTS_QUERY);
      return posts.map(mapSanityPost);
    },
    staleTime: 1000 * 60 * 5, // 5 min cache
    retry: 1,
  });

  // Fall back to static posts if Sanity returns empty or errors
  const posts = data && data.length > 0 ? data : staticPosts;
  const isSanity = !!(data && data.length > 0);

  // Build categories from actual posts
  const categories = isSanity
    ? ["All", ...Array.from(new Set(posts.map((p) => p.category)))]
    : staticCategories;

  return { posts, categories, isLoading, error, isSanity };
}
