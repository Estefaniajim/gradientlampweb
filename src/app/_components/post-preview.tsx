import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  coverVideo?: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        {coverVideo ? (
          <CoverVideo title={title} video={coverVideo} slug={slug} />
        ) : (
          <CoverImage title={title} src={coverImage ?? ""} slug={slug} />
        )}
        
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
