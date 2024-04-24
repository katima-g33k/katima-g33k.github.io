import React from "react";
import { useMap } from "./useMap";
import "jsvectormap/dist/css/jsvectormap.css";

type MapProps = {
  className?: string;
  id?: string;
}

export default function Map({ id = "map", ...props }: MapProps) {
  useMap(`#${id}`);

  return (
    <div id={id} {...props} />
  );
}
