import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name?: string ;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TAdminSidebarItem = {
  key: string |undefined;
  label: ReactNode;
  children?: TAdminSidebarItem[] ;
}| undefined;

export * from "./global";
export * from "./semesterRegistration.type";
export * from "./courseManagement/courseManagement.type";
