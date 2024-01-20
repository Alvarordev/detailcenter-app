"use client";

import Container from "@/components/container";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const Registro = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      <Header title="Registro">
        <span className="text-sm">Bienvenido, Manolo Rodriguez</span>
      </Header>

      <Container classname="justify-center items-center text-center">
        <div className="flex flex-col gap-3 max-w-sm w-full">
          <span className="text-lg font-medium">Ingresar placa:</span>
          <Input
            className="bg-transparent text-center font-medium"
            placeholder="BDD 198"
          />
          <Button variant="default" onClick={() => router.push('/budget')}>
            Empezar cotizacion
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Registro;
