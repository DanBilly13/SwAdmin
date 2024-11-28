import React from "react";
import { Link } from "react-router-dom";
import { NavButton } from "../../atoms";
import { TeamProfile } from "../TeamProfile";
import { getAssetPath } from "../../../utils/paths";

type NavigationItem = {
  name: string;
  href: string;
};

interface AnvandareNavProps {
  navigation: NavigationItem[];
  activeItem?: string;
}

export const AnvandareNav: React.FC<AnvandareNavProps> = ({
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
        <h2 className="text-headline-s mb-6">Användare</h2>

        <div className="space-y-2">
          {navigation.map(({ href, name }) => (
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
    case "/anvandare":
      return "dashboard";
    case "/anvandare/users":
      return "group";
    case "/anvandare/account":
      return "person";
    case "/anvandare/lagroller":
      return "groups";
    case "/anvandare/foljande":
      return "favorite";
    case "/anvandare/inlagg-och-kommentarer":
      return "chat";
    case "/anvandare/inskickade-rapporter":
      return "report";
    case "/anvandare/inkop":
      return "shopping_cart";
    case "/anvandare/behorighet":
      return "security";
    default:
      return "chevron_right";
  }
};

export default AnvandareNav;
