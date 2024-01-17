const Dashboard = () => {
  return (
    <div className="ml-52 flex flex-col w-full p-10 items-center">
      <h1 className="text-2xl font-bold pb-12">Dashboard</h1>

      <div className="flex gap-3 w-full pb-5">
        <label>Filtrar intereses:</label>
        <input className="border-2 border-slate-500 px-1 rounded-md" type="text" placeholder="Lunas, Faros..." />
      </div>

      <table className="border-2 border-slate-500 w-full">
        <thead className="border-2 border-b border-slate-500">
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Intereses</th>
        </thead>
        <tbody>
          <tr className="[&>td]:text-center">
            <td>Alvaro Rodriguez Aguilar</td>
            <td>948 074 074</td>
            <td>alvarord519@gmail.com</td>
            <td>BDD198</td>
            <td>Subaru</td>
            <td>XV</td>
            <td>Lunas, Faros</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
