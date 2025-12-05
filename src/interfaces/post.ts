export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;

  coverImage?: string;
  coverVideo?: string;


  ogImage: {
    url: string;
  };

  carouselImages?: string[];
  inlineImages?: string[];

  content?: string;
  preview?: boolean;
}
