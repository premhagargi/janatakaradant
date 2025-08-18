import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Payment Failed - Janata Karadant E-Store',
};

export default function CheckoutFailPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 flex items-center justify-center">
      <Card className="max-w-md text-center">
        <CardContent className="p-8">
          <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-3xl font-headline font-bold">Payment Failed</h1>
          <p className="text-muted-foreground mt-2">
            Unfortunately, we were unable to process your payment. Please check your payment details and try again.
          </p>
          <Button asChild className="mt-6" variant="default">
            <Link href="/checkout">Try Again</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
