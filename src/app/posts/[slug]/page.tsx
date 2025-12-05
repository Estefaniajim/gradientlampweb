import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Home() {
  const post = getPostBySlug("product");

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />

        <article className="mb-32">
          <PostHeader 
            title={post.title}
            coverImage={post.coverImage}
          />

          <PostBody
            content={content}
            carouselImages={post.carouselImages || null}
            inlineImages={post.inlineImages || null}
          />
        </article>
      </Container>
    </main>
  );
}