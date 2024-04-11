import React from "react";

import WorkListItem from "./WorkListItem";

import type { Work } from "./types";

interface WorkListColumnProps {
  workList: Work[];
}

const WorkListColumn = ({ workList }: WorkListColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      {workList.map(item => <WorkListItem key={`${item.title}-${item.location}`} {...item} />)}
    </div>
  );
};

export default WorkListColumn;
