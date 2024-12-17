import React from "react";
import { teamStaff } from "../../../data/teamStaff";

export const TeamStaffAccordion: React.FC = () => {
  return (
    <div className="space-y-2">
      {teamStaff.map((member) => (
        <div key={member.id} className="text-body-s flex justify-between">
          <span className="text-content-secondary">{member.role}</span>
          <span>{member.name}</span>
        </div>
      ))}
    </div>
  );
};
