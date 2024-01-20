/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  url: string;
}

export function CarouselDemo({ url }: Props) {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0 border-none rounded-lg">
                  <img
                    src={url}
                    alt="caorusel-images"
                    className="w-full object-cover object-center rounded-lg min-h-96"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
