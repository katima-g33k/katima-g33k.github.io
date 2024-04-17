import React, { ReactNode } from "react";
import classnames from "classnames";
import { ChevronDown, ChevronUp } from "react-feather";

import { useExpandableCard } from "./useExpandableCard";

interface ExpandableCardProps {
  content: ReactNode;
  expandedByDefault?: boolean;
  title: ReactNode;
}

const ExpandableCard = ({ content, expandedByDefault = false, title }: ExpandableCardProps) => {
  const { isExpanded, handleOnKeyboard, toggleIsExpanded } = useExpandableCard(expandedByDefault);

  return (
    <div
      className="cursor-pointer w-full p-4 bg-opacity-20 bg-black h-fit"
      onClick={toggleIsExpanded}
      onKeyDown={handleOnKeyboard}
      tabIndex={0}
    >
      <div className="flex justify-between gap-3">
        {title}
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </div>

      <div
        aria-expanded={isExpanded}
        className={classnames("grid grid-rows-[0fr]", { "grid-rows-[1fr]": isExpanded })}
        style={{ transition: "grid-template-rows 0.5s ease-out" }}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
};

export default ExpandableCard;
