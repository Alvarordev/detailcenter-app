"use client";

import { Client } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "phone",
    header: "Telefono",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "plate",
    header: "Placa",
  },
  {
    accessorKey: "vehicle",
    header: "Vehiculo",
  },
  {
    accessorKey: "intereses",
    header: "Intereses",
  },
];
