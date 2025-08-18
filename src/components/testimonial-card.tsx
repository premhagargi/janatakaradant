import type { Testimonial } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-row items-center gap-4">
        <Image
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full"
          data-ai-hint="person"
        />
        <div>
          <h4 className="font-bold font-headline">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-muted-foreground italic">"{testimonial.text}"</p>
        <div className="flex items-center gap-1 mt-4 text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : ''}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
