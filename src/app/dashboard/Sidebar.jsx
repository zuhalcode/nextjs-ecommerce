"use client";
import SidebarLink from "@/components/dashboard/SidebarLink";

export default function Sidebar() {
  const menu = [
    {
      name: "dashboard",
      url: "/dashboard",
    },
    {
      name: "products",
      url: "/dashboard/products",
    },
    {
      name: "customers",
      url: "/dashboard/customers",
    },
    {
      name: "logout",
      url: "/logout",
    },
  ];

  return (
    <div className="col-span-2 min-h-screen border-r border-r-slate-200 bg-white">
      <div className="m-2 mx-auto flex w-fit rounded-sm bg-white p-3 text-center shadow-md">
        Logo
        <p className="">Commercehq</p>
      </div>
      <ul className="mt-10 flex flex-col items-center justify-center space-y-2">
        {menu.map((menu, index) => (
          <SidebarLink menu={menu} key={index}>
            {menu.name.toUpperCase()}
          </SidebarLink>
        ))}
      </ul>
    </div>
  );
}
