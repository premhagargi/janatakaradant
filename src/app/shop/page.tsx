import { ProductCard } from '@/components/product-card';
import { placeholderProducts } from '@/lib/placeholder-data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Shop - Janata Karadant E-Store',
  description: 'Explore our wide range of authentic Indian sweets from Gokak.',
};

export default function ShopPage() {
  const categories = [...new Set(placeholderProducts.map(p => p.category))];
  const sizes = [...new Set(placeholderProducts.flatMap(p => p.sizes))];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Collection</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover the authentic taste of tradition in every bite.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-headline font-semibold">Price Range</Label>
                <Slider defaultValue={[500]} max={1000} step={10} className="mt-4" />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>₹0</span>
                  <span>₹1000</span>
                </div>
              </div>
              <div>
                <Label className="text-lg font-headline font-semibold">Category</Label>
                <div className="space-y-2 mt-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`cat-${category}`} />
                      <label htmlFor={`cat-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-lg font-headline font-semibold">Size</Label>
                <div className="space-y-2 mt-2">
                   {sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={`size-${size}`} />
                      <label htmlFor={`size-${size}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </aside>
        <main className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
