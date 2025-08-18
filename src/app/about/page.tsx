import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us - Janata Karadant E-Store',
  description: 'Learn about the history and tradition of Janata Karadant, serving authentic Gokak sweets since 2006.',
};

export default function AboutPage() {
  const values = [
    'Authentic Recipes',
    'Premium Quality Ingredients',
    'Commitment to Hygiene',
    'Customer Satisfaction'
  ];

  return (
    <div className="bg-background">
      <header className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
         <Image
          src="https://placehold.co/1600x600.png"
          alt="Sweets manufacturing"
          data-ai-hint="kitchen factory"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
                Our Story
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-body drop-shadow-md">
                A journey of taste, tradition, and trust.
            </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">
                    From Gokak with Love, Since 2006
                </h2>
                <p className="mt-6 text-lg text-muted-foreground font-body">
                    Founded in the heart of Gokak, a town renowned for its culinary heritage, Janata Karadant began with a simple mission: to share the authentic taste of our traditional sweets with the world. For over a decade, we have stayed true to our roots, using age-old recipes passed down through generations.
                </p>
                <p className="mt-4 text-lg text-muted-foreground font-body">
                    Our Karadant is not just a sweet; it's a piece of our culture. It represents health, happiness, and the joy of celebration. We meticulously select the finest dry fruits, purest jaggery, and freshest ingredients to create a product that is both delicious and wholesome.
                </p>
            </div>
            <div className="order-1 md:order-2">
                 <Image
                    src="https://placehold.co/600x600.png"
                    alt="Founder of Janata Karadant"
                    data-ai-hint="happy chef"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-xl"
                />
            </div>
        </section>

        <section className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Our Core Values</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <Card key={value} className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-headline font-semibold">{value}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
             <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet the Team</h2>
             <p className="mt-4 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
                Our passionate team of artisans and experts work tirelessly to bring you the best sweets, preserving the legacy of our brand.
            </p>
            <div className="mt-8">
                 <Image
                    src="https://placehold.co/1200x400.png"
                    alt="The Janata Karadant Team"
                    data-ai-hint="team portrait"
                    width={1200}
                    height={400}
                    className="rounded-lg shadow-xl mx-auto"
                />
            </div>
        </section>
      </main>
    </div>
  );
}
