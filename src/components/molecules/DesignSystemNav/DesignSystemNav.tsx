import React from "react";
import { Link } from "react-router-dom";
import { NavButton } from "../../atoms";
import { TeamProfile } from "../TeamProfile";
import { getAssetPath } from "../../../utils/paths";
import { Label } from "../../molecules/Label";

type NavigationItem = {
  name: string;
  href: string;
};

interface DesignSystemNavProps {
  navigation: NavigationItem[];
  activeItem?: string;
}

export const DesignSystemNav: React.FC<DesignSystemNavProps> = ({
  navigation,
  activeItem,
}) => {
  return (
    <div className="flex flex-col gap-8 px-4 mt-1">
      <div className="mb-9">
        <Link to="/">
          <TeamProfile
            size="medium"
            name="Min Fotboll"
            division="Admin"
            badgeSrc={getAssetPath("/images/team-badges/svff.jpg")}
          />
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-headline-s mb-6">Design System</h2>

        <div className="space-y-2">
          <Label text="Atoms" />
          {navigation
            .filter(({ href }) => 
              !['molecules', 'cards'].includes(href.replace('/', ''))
            )
            .map(({ href, name }) => (
              <NavButton key={href} to={href} icon={getIconForRoute(href)}>
                {name}
              </NavButton>
            ))}

          <Label text="Molecules" />
          {navigation
            .filter(({ href }) => 
              ['molecules', 'cards'].includes(href.replace('/', ''))
            )
            .map(({ href, name }) => (
              <NavButton key={href} to={href} icon={getIconForRoute(href)}>
                {name}
              </NavButton>
            ))}
        </div>
      </div>
    </div>
  );
};

const getIconForRoute = (route: string): string => {
  switch (route) {
    case "/components":
      return "grid";
    case "/molecules":
      return "science";
    case "/templates":
      return "dashboard_customize";
    case "/typography":
      return "text_fields";
    case "/colors":
      return "palette";
    case "/tables":
      return "table_view";
    case "/data-input":
      return "input";
    case "/data-display":
      return "data_object";
    case "/containers":
      return "grid_view";
    case "/buttons":
      return "smart_button";
    case "/navigation":
      return "menu";
    case "/images":
      return "image";
    case "/cards":
      return "dashboard";
    case "/spacers":
      return "space_bar";
    default:
      return "circle";
  }
};

export default DesignSystemNav;
