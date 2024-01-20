import Container from "@/components/container";
import Header from "@/components/header";

const Registro = () => {
  return (
    <div className="flex flex-col">
      <Header title="Registro">
        <span className="text-sm">Bienvenido, Manolo Rodriguez</span>
      </Header>

      <Container>
        <div>
            <span>Ingresar placa</span>
        </div>
      </Container>
    </div>
  );
};

export default Registro;
