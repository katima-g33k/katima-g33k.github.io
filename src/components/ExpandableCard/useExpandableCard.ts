import { KeyboardEvent, useState } from "react";

export const useExpandableCard = (expandedByDefault: boolean) => {
  const [isExpanded, setIsExpanded] = useState(expandedByDefault);
  const toggleIsExpanded = () => setIsExpanded(isExpanded => !isExpanded);
  const handleOnKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (["Enter", "Space"].includes(event.code)) {
      event.preventDefault();
      toggleIsExpanded();
    }
  };

  return { isExpanded, handleOnKeyboard, toggleIsExpanded };
};
