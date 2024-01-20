/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const Cotizar = () => {
  const services = [
    "Lavado de salon",
    "Aplicacion de ceramicos",
    "Correcion de pintura",
    "Lavado de faros",
    "Lavado de aros",
    "Lavado de flotas",
    "Lavado de asientos",
  ];

  return (
    <div className="flex flex-col h-full">
      <Header title="Cotizar">
        <span className="text-sm">Bienvenido, Manolo Rodriguez</span>
      </Header>

      <Container classname="p-16">
        <section className="w-full grid grid-cols-4 gap-y-10">
          <div className="col-span-1">
            <h3 className="text-lg text-primary underline font-medium pb-3">
              Servicios:
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service} className="flex gap-1.5 items-center text-sm">
                  <Checkbox />
                  <label>{service}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg text-primary underline font-medium pb-3">
              Intereses:
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service} className="flex gap-1.5 items-center text-sm">
                  <Checkbox />
                  <label>{service}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 flex flex-col items-center -mt-8">
            <div className="flex flex-col items-center">
              <img src="/car-draw.png" alt="car-draw" className="w-96" />
              <div className="flex border-2 border-foreground w-80 [&>div]:cursor-pointer">
                <div className="flex justify-center border-r-2 border-foreground w-full bg-primary">
                  Auto
                </div>
                <div className="flex justify-center border-r-2 border-foreground w-full">
                  C/chico
                </div>
                <div className="flex justify-center border-r-2 border-foreground w-full">
                  C/grande
                </div>
                <div className="flex justify-center w-full">C/xl</div>
              </div>
            </div>

            <div className="flex flex-col text-center gap-4 pt-5">
              <h3 className="text-lg text-primary font-medium underline">
                Vehiculo:
              </h3>

              <div className="flex items-center gap-2">
                <label>Placa:</label>
                <Input
                  type="text"
                  value={"BDD-198"}
                  className="bg-transparent h-8 text-center"
                />
              </div>

              <div className="flex items-center gap-2">
                <label>Marca:</label>
                <Input
                  type="text"
                  placeholder="Escribe la marca"
                  className="bg-transparent h-8 text-center"
                />
              </div>

              <div className="flex items-center gap-2">
                <label>Modelo:</label>
                <Input
                  type="text"
                  placeholder="Escribe el modelo"
                  className="bg-transparent h-8 text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between col-span-4">
            <div className="flex items-center gap-2">
              <span>Total:</span>
              <Input
                type="text"
                value={"S/. 100"}
                className="h-8 bg-transparent text-center"
              />
            </div>

            <Button>Finalizar Cotizacion</Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Cotizar;
