import React from "react";
import { divisions } from "../../../data/divisions";

interface DivisionsAccordionProps {
  isExpanded?: boolean;
}

export const DivisionsAccordion: React.FC<DivisionsAccordionProps> = ({ isExpanded = false }) => {
  const displayDivisions = isExpanded ? divisions : divisions.slice(0, 2);
  
  return (
    <div className="space-y-2">
      {displayDivisions.map((division) => (
        <div key={division.id} className="text-body-s">
          {division.name}
        </div>
      ))}
      {!isExpanded && divisions.length > 2 && (
        <div className="text-body-s text-content-secondary">
          +{divisions.length - 2} more
        </div>
      )}
    </div>
  );
};
