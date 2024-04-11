import React from "react";
import type { Work } from "../types";

type WorkListItemTitleProps = Omit<Work, "tasks">;

const WorkListItemTitle = ({ location, timeframe, title }: WorkListItemTitleProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p>{title}</p>
        {timeframe && <p>{timeframe}</p>}
      </div>
      {location && <p>{location}</p>}
    </div>
  );
};

export default WorkListItemTitle;
