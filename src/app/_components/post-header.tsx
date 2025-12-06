import CoverImage from "./cover-image";
import CoverVideo from "./cover-video";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage?: string;
  coverVideo?: string;   // ← NEW optional field
};

export function PostHeader({ title, coverImage, coverVideo }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="hidden md:block md:mb-12" />

      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverVideo ? (
          <CoverVideo title={title} video={coverVideo} slug={post.slug} />
        ) : (
          <CoverImage title={title} src={coverImage} slug={post.slug} />
        )}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6" />
        <div className="mb-6 text-lg" />
      </div>
    </>
  );
}
