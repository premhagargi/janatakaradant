import { BlogPostCard } from "@/components/blog-post-card";
import { placeholderBlogPosts } from "@/lib/placeholder-data";

export const metadata = {
  title: 'Blog - Janata Karadant E-Store',
  description: 'Read our blog for recipes, stories, and the history behind our traditional Indian sweets.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">From Our Kitchen</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Stories, recipes, and the latest news from Janata Karadant.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderBlogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
