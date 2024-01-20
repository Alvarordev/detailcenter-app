/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import { Home, LogOut, User, Wrench } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <Home />,
      active: pathname === "/" ? "text-primary" : "text-card",
    },
    {
      name: "Clientes",
      path: "/clients",
      icon: <User />,
      active: pathname === "/clients" ? "text-primary" : "text-card",
    },
    {
      name: "Servicios",
      path: "/services",
      icon: <Wrench />,
      active: pathname === "/services" ? "text-primary" : "text-card",
    },
  ];

  return (
    <aside className="fixed flex flex-col justify-between items-center min-h-full w-32 bg-foreground text-card py-10">
      <div>
        <img src="/detail-center-light.png" alt="logo" className="h-16" />
      </div>

      <ul className="flex flex-col gap-12">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.path}
            className={`${route.active} flex flex-col items-center gap-2`}
          >
            {route.icon}
          </Link>
        ))}
      </ul>

      <Link href={"/login"}>
        <LogOut />
      </Link>
    </aside>
  );
};

export default Sidebar;
