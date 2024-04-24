import { useEffect } from "react";
// @ts-ignore
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";

import type { CountryCode } from "./types";

const COUNTRIES_VISITED: CountryCode[] = [
  "BE",
  "BG",
  "CA",
  "CO",
  "CR",
  "CZ",
  "DE",
  "EG",
  "ES",
  "FR",
  "GB",
  "HU",
  "IT",
  "JP",
  "KH",
  "KR",
  "LU",
  "MA",
  "MY",
  "NL",
  "PT",
  "RO",
  "SK",
  "SG",
  "TH",
  "TR",
  "US",
  "VA",
  "VN",
];

export const useMap = (selector: string) => {
  useEffect(() => {
    if (!document.querySelector(`${selector} svg`)) {
      new jsVectorMap({
        selector,
        map: "world",
        draggable: false,
        showTooltip: false,
        zoomButtons: false,
        zoomOnScroll: false,
        selectedRegions: COUNTRIES_VISITED,
        regionStyle: {
          hover: {
            cursor: "default",
            fillOpacity: 1,
          }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onLoaded(map: any) {
          window.addEventListener("resize", () => {
            map.updateSize();
          });
        }
      });
    }
  }, []);
};
