import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  video: string;       // required video file path
  slug?: string;       // optional link to post
  className?: string;  // optional extra classes
};

export default function CoverVideo({ title, video, slug, className }: Props) {
  const videoElement = (
    <video
      src={video}
      className={cn(
        "w-full rounded shadow-sm",
        {
          "hover:shadow-lg transition-shadow duration-200 cursor-pointer": slug,
        },
        className
      )}
      autoPlay
      muted
      loop
      playsInline
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {videoElement}
        </Link>
      ) : (
        videoElement
      )}
    </div>
  );
}