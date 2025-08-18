"use client"

import type { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been successfully added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-0">
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative aspect-square w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint="sweet"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="p-4 border-t">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-headline font-semibold text-lg leading-tight">
              <Link href={`/products/${product.id}`} className="hover:text-primary">{product.name}</Link>
            </h3>
            <div className="flex items-center gap-1 text-sm text-accent">
              <span>{product.rating.toFixed(1)}</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
          <p className="text-muted-foreground mt-1 text-sm truncate">{product.description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold text-primary">
              ₹{product.price.toFixed(2)}
            </p>
            <Button size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
