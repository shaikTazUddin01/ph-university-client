import { NavLink } from "react-router-dom";
import { TAdminSidebarItem, TUserPath } from "../types";

export const sidebarGenerator = (items: TUserPath[], role :string) => {
  const adminSidebarItems = items.reduce((acc: TAdminSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item?.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
         
          if (child?.name) {
            return{
              key: child.name,
              label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
            }
}

  
        }),
      });
    }
    return acc;
  }, []);
  return adminSidebarItems;
};
