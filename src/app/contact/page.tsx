import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Janata Karadant E-Store',
  description: 'Get in touch with Janata Karadant. We are here to help with any questions or bulk orders.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
        <p className="text-lg text-muted-foreground mt-2">
          We're here to help. Reach out to us with any questions.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
            <h2 className="font-headline text-2xl font-semibold mb-4">Our Information</h2>
            <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1"/>
                    <span>Janata Karadant, Main Market, Gokak, Karnataka, 591307</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary"/>
                    <a href="tel:+911234567890" className="hover:text-primary">+91 12345 67890</a>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary"/>
                    <a href="mailto:contact@janatakaradant.com" className="hover:text-primary">contact@janatakaradant.com</a>
                </div>
            </div>
            <div className="mt-8">
                {/* Placeholder for a map */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Map Placeholder</p>
                </div>
            </div>
        </div>
        <div>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
