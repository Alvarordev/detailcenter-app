import Link from "next/link"

const Register = () => {
  return (
    <div className='ml-52 flex flex-col w-full p-10 items-center'>
        <h1 className="text-2xl font-bold pb-12">Registrar Cliente</h1>

        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <label>Nombre: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>
            
            <div className="flex gap-2">
                <label>Apellido: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>

            <div className="flex gap-2">
                <label>Telefono: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>

            <div className="flex gap-2">
                <label>Correo: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>
        </div>

        <div className="flex flex-col gap-3 pt-10">
            <div className="flex gap-2">
                <label>Placa: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>
            
            <div className="flex gap-2">
                <label>Marca: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>

            <div className="flex gap-2">
                <label>Modelo: </label>
                <input type="text" className="border-2 rounded-md border-gray-200"/>
            </div>

            <div className="flex gap-2">
                <label>Intereses: </label>
                <select className="border-2 rounded-md border-gray-200">
                    <option value="">Escoge uno</option>
                    <option value="">Lunas</option>
                    <option value="">Faros</option>
                    <option value="">Pintura</option>
                </select>
            </div>
        </div>

        <Link href={'/dashboard'} className="mt-10 bg-slate-700 py-2 px-4 rounded-md text-white">
            Registrar
        </Link>
    </div>
  )
}

export default Register