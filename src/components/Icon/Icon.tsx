import React, { AriaAttributes } from "react";
import * as FeatherIcons from "react-feather";
import { IconNameList } from "../../types";

export interface IconProps extends AriaAttributes {
  className?: string;
  name: IconNameList;
}

const Icon = ({ name, ...props }: IconProps) => {
  // @ts-ignore
  const FeatherIcon = FeatherIcons[name];

  return FeatherIcon
    ? <FeatherIcon {...props} />
    : <img {...props} src={`/icons/${name}.svg`} alt={name} />;
};

export default Icon;
