import { TRoute, TUserPath } from "../types";

//programatical way router
export const routePaths = (item:TUserPath[]) => {
  const router = item.reduce((acc: TRoute[], item) => {
    //   acc.push(item)
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return router
};
