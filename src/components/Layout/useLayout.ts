import { useLocation } from "react-router-dom";
import { getLayoutProps } from "./lib";

export const useLayout = () => {
  const { pathname } = useLocation();

  return getLayoutProps(pathname);
};
