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
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/modal-provider";

interface Props {
  url: string;
}

export function CarouselDemo({ url }: Props) {
  const router = useRouter();
  const { closeModal } = useModal();

  const chooseService = () => {
    router.push("/register");
    closeModal();
  };

  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-none flex flex-col">
                <CardContent className="flex items-center justify-center p-0 border-none rounded-lg">
                  <img
                    src={url}
                    alt="caorusel-images"
                    className="w-full object-cover object-center rounded-lg min-h-96"
                  />
                </CardContent>
                <Button className="mt-2" onClick={chooseService}>
                  Cotizar
                </Button>
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
