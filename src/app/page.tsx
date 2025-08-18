import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderProducts, placeholderTestimonials } from '@/lib/placeholder-data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { TestimonialCard } from '@/components/testimonial-card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Traditional Indian sweets"
          data-ai-hint="indian sweets"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="relative z-10 flex flex-col items-center p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold drop-shadow-lg">
            Authentic Taste of Gokak
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-body drop-shadow-md">
            Since 2006
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
               <Link href="/shop?category=bulk">Bulk Orders</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold mb-12">
            Our Signature Sweets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placeholderProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-accent text-lg hover:text-accent/80">
              <Link href="/shop">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Janata Karadant store"
              data-ai-hint="sweet shop"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              A Legacy of Taste &amp; Tradition
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-body">
              Janata Karadant has been crafting the finest quality sweets from Gokak since 2006. Our secret lies in using authentic recipes, premium ingredients, and a passion for perfection that has been passed down through generations.
            </p>
            <Button asChild className="mt-8">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
