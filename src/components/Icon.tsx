import React, { AriaAttributes } from "react";
import * as FeatherIcons from "react-feather";

export type IconNameList = keyof typeof FeatherIcons;

export interface IconProps extends AriaAttributes {
  className?: string;
  name: IconNameList;
}

export default function Icon({ name, ...props }: IconProps) {
  const FeatherIcon = FeatherIcons[name];

  return <FeatherIcon {...props} />;
}
