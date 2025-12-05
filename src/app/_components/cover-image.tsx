import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src?: string;              
  video?: string;           
  slug?: string;
  quality?: number;
  sizes?: string;
};

const CoverImage = ({ title, src, video, slug, quality, sizes }: Props) => {
  const media = video ? (
    <video
      src={video}
      className={cn("w-full rounded shadow-sm", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      autoPlay
      muted
      loop
      playsInline
    />
  ) : (
    <Image
      src={src!}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
      quality={quality ?? 75}
      sizes={sizes ?? "(max-width: 768px) 100vw, 1300px"}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {media}
        </Link>
      ) : (
        media
      )}
    </div>
  );
};

export default CoverImage;
