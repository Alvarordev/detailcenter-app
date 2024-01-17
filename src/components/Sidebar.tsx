/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed min-h-full w-52 bg-gray-200 p-6">
      <Link href={'/'} className="flex justify-center">
        <img src="/detail-center-logo.png" alt="logo" className="h-16" />
      </Link>
      <ul className="flex flex-col items-center pt-20 gap-4">
        <li className="hover:text-red-500">
          <Link href={'/'}>Inicio</Link>
        </li>

        <li className="hover:text-red-500">
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
