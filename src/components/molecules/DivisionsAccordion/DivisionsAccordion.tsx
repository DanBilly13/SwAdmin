import React from "react";
import { divisions } from "../../../data/divisions";

export const DivisionsAccordion: React.FC = () => {
  return (
    <div className="space-y-2">
      {divisions.map((division) => (
        <div key={division.id} className="text-body-s">
          {division.name}
        </div>
      ))}
    </div>
  );
};
