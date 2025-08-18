import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Shopping Cart - Janata Karadant E-Store',
  description: 'Review your order and proceed to checkout.',
};

// Placeholder cart item
const cartItem = {
  id: '1',
  name: 'Classic Karadant',
  imageUrl: 'https://placehold.co/100x100.png',
  size: '500g',
  price: 250,
  quantity: 1,
};

export default function CartPage() {
  const subtotal = cartItem.price * cartItem.quantity;
  const shipping = 50; // Placeholder shipping cost
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Shopping Cart</h1>
      </header>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Your Items (1)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Image
                  src={cartItem.imageUrl}
                  alt={cartItem.name}
                  data-ai-hint="sweet product"
                  width={100}
                  height={100}
                  className="rounded-lg border"
                />
                <div className="flex-grow">
                  <h3 className="font-headline font-semibold">{cartItem.name}</h3>
                  <p className="text-sm text-muted-foreground">Size: {cartItem.size}</p>
                  <p className="text-lg font-bold text-primary mt-1">₹{cartItem.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Input type="number" value={cartItem.quantity} className="w-16 text-center" readOnly />
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
