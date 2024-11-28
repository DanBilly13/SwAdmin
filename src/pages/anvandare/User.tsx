import React from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { LinkCard } from "../../components/molecules/LinkCard";

const userPages = [
  {
    title: "Konto",
    icon: "person",
    description: "Hantera ditt konto och personliga inställningar",
    to: "/anvandare/account",
  },
  {
    title: "Lagroller",
    icon: "groups",
    description: "Hantera roller och behörigheter för teammedlemmar",
    to: "/anvandare/lagroller",
  },
  {
    title: "Följande",
    icon: "favorite",
    description: "Se och hantera dina följare och de du följer",
    to: "/anvandare/foljande",
  },
  {
    title: "Inlägg & Kommentarer",
    icon: "chat",
    description: "Granska och moderera användarinlägg och kommentarer",
    to: "/anvandare/inlagg-och-kommentarer",
  },
  {
    title: "Inskickade rapporter",
    icon: "report",
    description: "Hantera användarrapporter och flaggat innehåll",
    to: "/anvandare/inskickade-rapporter",
  },
  {
    title: "Inköp",
    icon: "shopping_cart",
    description: "Se och hantera användarköp och transaktioner",
    to: "/anvandare/inkop",
  },
  {
    title: "Behörighet",
    icon: "security",
    description: "Hantera användarbehörigheter och åtkomstkontroll",
    to: "/anvandare/behorighet",
  },
];

const User = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Användare", href: "/anvandare" },
        ]}
        onMenuClick={toggleDrawer}
      />
      <PageTitle 
        title="Användare" 
        description="Hantera användare, roller och behörigheter i Min Fotboll"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {userPages.map((page) => (
          <LinkCard
            key={page.title}
            title={page.title}
            description={page.description}
            icon={page.icon}
            to={page.to}
          />
        ))}
      </div>
    </ContentContainer>
  );
};

export default User;
