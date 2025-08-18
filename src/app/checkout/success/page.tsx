import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Order Successful - Janata Karadant E-Store',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 flex items-center justify-center">
      <Card className="max-w-md text-center">
        <CardContent className="p-8">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-headline font-bold">Payment Successful!</h1>
          <p className="text-muted-foreground mt-2">
            Thank you for your order. A confirmation email has been sent to your address.
          </p>
          <p className="text-sm mt-4">Your Order ID is: <span className="font-mono bg-muted p-1 rounded">#JK123456</span></p>
          <Button asChild className="mt-6">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
