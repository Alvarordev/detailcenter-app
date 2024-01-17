/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed min-h-full w-52 bg-gray-200 p-6">
      <Link href={'/'} className="flex justify-center">
        <img src="/detail-center-logo.png" alt="logo" className="h-16" />
      </Link>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
