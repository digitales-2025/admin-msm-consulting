import {
  Banknote,
  BriefcaseBusiness,
  Building,
  Files,
  GraduationCap,
  Hospital,
  KeyRound,
  Layers,
  LayoutDashboard,
  SquareActivity,
  UsersRound,
} from "lucide-react";

import { type SidebarData } from "./types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navGroups: [
    {
      title: "Inicio",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Gestión Operativa",
      items: [
        {
          title: "Seguimiento",
          icon: Layers,
          url: "/tracking",
        },
        {
          title: "Salud Ocupacional",
          icon: SquareActivity,
          url: "/occupational-health",
        },
      ],
    },
    {
      title: "Gestión Administrativa",
      items: [
        {
          title: "Clínicas",
          icon: Hospital,
          url: "/clinics",
        },
        {
          title: "Clientes",
          icon: Building,
          url: "/clients",
        },
        {
          title: "Servicios",
          icon: BriefcaseBusiness,
          url: "/clients",
        },
      ],
    },
    {
      title: "Gestión Comercial",
      items: [
        {
          title: "Cotizaciones",
          icon: Files,
          url: "/quotes",
        },
        {
          title: "Pagos",
          icon: Banknote,
          url: "/payments",
        },
      ],
    },
    {
      title: "Gestión de Capacitaciones",
      items: [
        {
          title: "Certificados",
          icon: GraduationCap,
          url: "/certificates",
        },
      ],
    },
    {
      title: "Gestión de Usuarios",
      items: [
        {
          title: "Usuarios",
          icon: UsersRound,
          url: "/users",
        },
        {
          title: "Roles y permisos",
          icon: KeyRound,
          url: "/roles",
        },
      ],
    },
  ],
};
