/* eslint-disable @next/next/no-img-element */
"use client";

import Card from "@/components/service-card";
import Container from "@/components/container";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/modal-provider";

export default function Home() {
  const router = useRouter();
  const { openModal } = useModal();

  const services = [
    {
      title: "Lavado de salon",
      url: "/lavado-salon.jpg",
    },
    {
      title: "Corrección de pintura",
      url: "/black-car.webp",
    },
    {
      title: "Aplicación de cerámicos",
      url: "/Tratamiento-ceramico.jpg",
    },
    {
      title: "Lavado de faros",
      url: "/limpieza-faros.jpg",
    },
    {
      title: "Lavado de aros",
      url: "/limpieza-aros.jpg",
    },
    {
      title: "Lavado de flotas",
      url: "/lavado-flotas.jpg",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header title="Nuestros Servicios">
        <Button onClick={() => router.push("/register")} variant="default">
          Empezar Cotizacion
        </Button>
      </Header>

      <Container>
        <section className="w-full grid grid-cols-3 gap-y-10">
          {services.map((service) => (
            <div key={service.title} className="col-span-1 flex justify-center">
              <Card
                title={service.title}
                url={service.url}
              />
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
}
