import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Customers",
    path: "./customers",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 3,
    title: "Farmers",
    path: "./farmers",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaRegIdBadge />,
  },
  {
    id: 4,
    title: "Admin",
    path: "./admin",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUserAlt />,
  },
  {
    id: 4,
    title: "Orders",
    path: "./orders",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaShoppingCart />,
  }
];
