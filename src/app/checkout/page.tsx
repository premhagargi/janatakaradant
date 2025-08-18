import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export const metadata = {
  title: 'Checkout - Janata Karadant E-Store',
  description: 'Complete your purchase.',
};

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Checkout</h1>
      </header>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Shipping and Payment Forms */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Gokak" />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" placeholder="591307" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="**** **** **** 1234" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="row-start-1 md:row-start-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Your Order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex justify-between">
                <span>Classic Karadant (500g) x 1</span>
                <span>₹250.00</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹250.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>₹50.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹300.00</span>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button asChild className="w-full" size="lg">
                <Link href="/checkout/success">Pay Now (Success)</Link>
            </Button>
            <Button asChild className="w-full" size="lg" variant="destructive">
                <Link href="/checkout/fail">Pay Now (Fail)</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
