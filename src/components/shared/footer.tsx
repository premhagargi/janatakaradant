import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mountain, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <Mountain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-headline font-semibold text-primary">
                    Janata Karadant
                </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Authentic Taste of Gokak Since 2006. Handcrafted with love and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-sm hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-headline font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm hover:text-primary">FAQs</Link></li>
              <li><Link href="/shipping-returns" className="text-sm hover:text-primary">Shipping &amp; Returns</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-headline font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">Get updates on new products and special offers.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="bg-background"/>
                <Button type="submit">Subscribe</Button>
            </div>
            <div className="flex space-x-4 mt-6">
                <Link href="#"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Janata Karadant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
