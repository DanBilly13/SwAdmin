import React from "react";
import { teamStaff } from "../../../data/teamStaff";

interface TeamStaffAccordionProps {
  isExpanded?: boolean;
}

export const TeamStaffAccordion: React.FC<TeamStaffAccordionProps> = ({ isExpanded = false }) => {
  const displayStaff = isExpanded ? teamStaff : teamStaff.slice(0, 2);
  
  return (
    <div className="space-y-2">
      {displayStaff.map((member) => (
        <div key={member.id} className="text-body-s flex justify-start gap-x-4">
          <span className="text-content-secondary">{member.role}</span>
          <span>{member.name}</span>
        </div>
      ))}
      {!isExpanded && teamStaff.length > 2 && (
        <div className="text-body-s text-content-secondary">
          +{teamStaff.length - 2} more
        </div>
      )}
    </div>
  );
};
