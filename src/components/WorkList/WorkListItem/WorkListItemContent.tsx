import React from "react";
import type { Work } from "../types";

type WorkListItemContentProps = Pick<Work, "tasks">;

const WorkListItemContent = ({ tasks }: WorkListItemContentProps) => {
  return (
    <ul className="list-disc ml-6">
      {tasks.map(task => <li key={task}>{task}</li>)}
    </ul>
  );
};

export default WorkListItemContent;
