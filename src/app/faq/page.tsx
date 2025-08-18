import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { placeholderFaqs } from '@/lib/placeholder-data';

export const metadata = {
  title: 'FAQs - Janata Karadant E-Store',
  description: 'Find answers to frequently asked questions about our products, shipping, and more.',
};

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Have questions? We have answers.
        </p>
      </header>
      <main>
        <Accordion type="single" collapsible className="w-full">
          {placeholderFaqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-headline text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
