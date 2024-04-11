import React from "react";

import ExpandableCard from "../../ExpandableCard";
import WorkListItemContent from "./WorkListItemContent";
import WorkListItemTitle from "./WorkListItemTitle";

import type { Work } from "../types";

type WorkListItemProps = Work;

const WorkListItem = ({ tasks, ...titleProps }: WorkListItemProps) => {
  return (
    <ExpandableCard
      content={<WorkListItemContent tasks={tasks} />}
      title={<WorkListItemTitle {...titleProps} />}
    />
  );
};

export default WorkListItem;
