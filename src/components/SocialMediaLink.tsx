import React from "react";
import Icon from "./Icon";
import type { SocialMediaLink as SocialMediaLinkType } from "../types";

type SocialMediaLinkProps = SocialMediaLinkType;

export default function SocialMediaLink({ href, icon }: SocialMediaLinkProps) {
  return (
    <a className="pb-2 border-b-4 border-solid border-transparent hover:border-white" href={href} target="_blank" rel="noreferrer">
      <Icon className="h-20 w-20 md:h-24 md:w-24" name={icon} />
    </a>
  );
}
