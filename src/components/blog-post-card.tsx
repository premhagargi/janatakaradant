import type { BlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            data-ai-hint="food blog"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{post.date}</p>
        <h3 className="font-headline font-semibold text-xl mt-2 leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>
        <Button asChild variant="link" className="p-0 h-auto mt-4 text-accent hover:text-accent/80">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
