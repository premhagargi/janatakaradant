import { placeholderBlogPosts } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = placeholderBlogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: `${post.title} - Janata Karadant Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = placeholderBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12">
      <header className="text-center mb-8">
        <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{post.title}</h1>
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://placehold.co/100x100.png" alt={post.author} data-ai-hint="person" />
                <AvatarFallback>JK</AvatarFallback>
            </Avatar>
            <span>By {post.author}</span>
        </div>
      </header>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg my-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          data-ai-hint="food article"
          fill
          className="object-cover"
        />
      </div>
      <div
        className="prose lg:prose-xl max-w-none font-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Separator className="my-12"/>
      <div className="text-center">
        <h3 className="font-headline text-2xl font-semibold">Share this post</h3>
        {/* Placeholder for social share buttons */}
        <p className="text-muted-foreground mt-2">Help spread the word about our delicious traditions!</p>
      </div>
    </article>
  );
}
