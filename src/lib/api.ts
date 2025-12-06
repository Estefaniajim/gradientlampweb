import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: Post = {
    slug: realSlug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "",
    coverVideo: data.coverVideo ?? "",
    ogImage: data.ogImage ?? { url: "" },
    carouselImages: data.carouselImages ?? [],
    inlineImages: data.inlineImages ?? [],
    preview: data.preview ?? false,
    content
  };

  return post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  const productPost = posts.find((p) => p.slug.toLowerCase() === "product");
  const otherPosts = posts
    .filter((p) => p.slug.toLowerCase() !== "product")
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return productPost ? [productPost, ...otherPosts] : otherPosts;
  }