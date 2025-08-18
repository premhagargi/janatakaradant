"use client";

import { placeholderProducts } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const product = placeholderProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been successfully added to your cart.`,
    });
  };

  const relatedProducts = placeholderProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint="sweet closeup"
              fill
              className="object-cover"
            />
          </div>
          {/* Thumbnails can be added here */}
        </div>

        {/* Product Details */}
        <div>
          <Badge variant="outline" className="border-accent text-accent">{product.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mt-2">{product.name}</h1>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'fill-current' : ''}`} />
                ))}
            </div>
            <span className="text-muted-foreground text-sm">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-lg text-muted-foreground mt-4 font-body">{product.description}</p>
          <p className="text-3xl font-bold text-primary mt-6">₹{product.price.toFixed(2)}</p>
          
          <div className="mt-6">
            <h3 className="text-md font-semibold font-headline">Select Size:</h3>
            <div className="flex gap-2 mt-2">
              {product.sizes.map(size => (
                <Button key={size} variant="outline">{size}</Button>
              ))}
            </div>
          </div>
          
          <Button size="lg" className="w-full mt-8" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="ingredients">
              <AccordionTrigger className="font-headline text-lg">Ingredients</AccordionTrigger>
              <AccordionContent>
                {product.ingredients.join(', ')}.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nutrition">
              <AccordionTrigger className="font-headline text-lg">Nutrition Facts</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  {Object.entries(product.nutrition).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews">
              <AccordionTrigger className="font-headline text-lg">Reviews</AccordionTrigger>
              <AccordionContent>
                Placeholder for customer reviews.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <Separator />
        <h2 className="text-3xl font-headline font-bold text-center my-12">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  );
}
