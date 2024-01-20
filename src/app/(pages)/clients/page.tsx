import { columns } from "@/components/clients/columns";
import { DataTable } from "@/components/clients/data-table";
import Container from "@/components/container";
import Header from "@/components/header";
import { Input } from "@/components/ui/input";

const Clientes = () => {
  const data = [
    {
      name: "Alvaro Rodriguez",
      phone: "948074074",
      email: "alvarord519@example.com",
      plate: "BDD-198",
      vehicle: "Subaru-XV",
      intereses: ["Faros, Aros"],
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header title="Clientes">
        <span className="text-sm">Bienvenido, Manolo Rodriguez</span>
      </Header>

      <Container>
        <div>
          <div className="flex items-center gap-2 mb-4 max-w-xs w-full">
            <span>Filtrar:</span>
            <Input className="bg-transparent h-8" placeholder="Interes, placa.."/>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
      </Container>
    </div>
  );
};

export default Clientes;
