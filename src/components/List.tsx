import H2 from "./H2";
import React from "react";

interface ListProps {
  className?: string;
  items: string[],
  title: string;
}

export default function List({ items, title, ...props }: ListProps) {
  return (
    <div {...props}>
      <H2>{title}</H2>

      <ul className="list-disc ml-4">
        {items.map((item, index) => <li key={index} className="my-1">{item}</li>)}
      </ul>
    </div>
  );
}
