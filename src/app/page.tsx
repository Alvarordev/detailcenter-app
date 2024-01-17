'use client'

import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const router = useRouter()

  return (
    <main className="ml-52 flex flex-col items-center w-full p-6 ">
      <section className="py-10 w-full text-center relative">
        <h1 className="text-2xl font-bold">Nuestros Servicios</h1>

        <article className="grid grid-cols-2 grid-rows-2 gap-10 pt-16 max-w-4xl mx-auto">
          <div className="h-80 w-full relative" onClick={() => router.push('/register')}>
            <div className="absolute bottom-0 top-0 z-10 h-full w-full rounded-xl cursor-pointer">
              <div
                className="background transition-scale absolute bottom-0 left-0 top-0
                -z-10 h-full w-full bg-cover bg-center bg-no-repeat  bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 rounded-xl"
                data-src="/grefg.webp"
                style={{ backgroundImage: 'url("/black-car.webp")' }}
              ></div>
              <div className="absolute bottom-0 z-20 w-full top-0 bg-black opacity-40 rounded-xl"></div>

              <div className="relative z-50 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6 text-white">
                <h2 className="mb-4 text-start text-2xl font-semibold uppercase text-white">
                  Correcion de pintura
                </h2>
              </div>
            </div>
          </div>

          <div className="h-80 w-full relative">
            <div className="absolute bottom-0 top-0 z-10 h-full w-full rounded-xl cursor-pointer">
              <div
                className="background transition-scale absolute bottom-0 left-0 top-0
                -z-10 h-full w-full bg-cover bg-center bg-no-repeat  bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 rounded-xl"
                data-src="/grefg.webp"
                style={{ backgroundImage: 'url("/Tratamiento-ceramico.jpg")' }}
              ></div>

              <div className="absolute bottom-0 z-20 w-full top-0 bg-black opacity-40 rounded-xl"></div>

              <div className="relative z-50 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6 text-white">
                <h2 className="mb-4 text-start text-2xl font-semibold uppercase text-white">
                  Aplicacion de Ceramicos
                </h2>
              </div>
            </div>
          </div>

          <div className="h-80 w-full relative">
            <div className="absolute bottom-0 top-0 z-10 h-full w-full rounded-xl cursor-pointer">
              <div
                className="background transition-scale absolute bottom-0 left-0 top-0
                -z-10 h-full w-full bg-cover bg-center bg-no-repeat  bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 rounded-xl"
                data-src="/grefg.webp"
                style={{ backgroundImage: 'url("/Tratamiento-ceramico.jpg")' }}
              ></div>

              <div className="absolute bottom-0 z-20 w-full top-0 bg-black opacity-40 rounded-xl"></div>

              <div className="relative z-50 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6 text-white">
                <h2 className="mb-4 text-start text-2xl font-semibold uppercase text-white">
                  Aplicacion de Ceramicos
                </h2>
              </div>
            </div>
          </div>

          <div className="h-80 w-full relative">
            <div className="absolute bottom-0 top-0 z-10 h-full w-full rounded-xl cursor-pointer">
              <div
                className="background transition-scale absolute bottom-0 left-0 top-0
                -z-10 h-full w-full bg-cover bg-center bg-no-repeat  bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 rounded-xl"
                data-src="/grefg.webp"
                style={{ backgroundImage: 'url("/lavado-salon.jpg")' }}
              ></div>

              <div className="absolute bottom-0 z-20 w-full top-0 bg-black opacity-40 rounded-xl"></div>

              <div className="relative z-50 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6 text-white">
                <h2 className="mb-4 text-start text-2xl font-semibold uppercase text-white">
                  Lavado de salon
                </h2>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
