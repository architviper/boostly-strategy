import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "hmtnqkve",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// GROQ queries
export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  body,
  category,
  author,
  "date": publishedAt,
  readTime
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  body,
  category,
  author,
  "date": publishedAt,
  readTime
}`;

export const CATEGORIES_QUERY = `array::unique(*[_type == "post"].category)`;
