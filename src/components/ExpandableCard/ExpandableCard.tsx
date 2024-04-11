import React, { KeyboardEvent, ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

import { useExpandableCard } from "./useExpandableCard";

import styles from "./styles.module.css";

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

      <div aria-expanded={isExpanded} className={styles.wrapper}>
        <div className={styles.inner}>{content}</div>
      </div>
    </div>
  );
};

export default ExpandableCard;
