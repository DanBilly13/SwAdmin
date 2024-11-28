import React from "react";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import { MainContentHead } from "../components/molecules/MainContentHead/MainContentHead";
import { PageTitle } from "../components/atoms/PageTitle/PageTitle";
import { LinkCard } from "../components/molecules/LinkCard/LinkCard";
import { cards } from "../data/cards";

const Home = () => {
  return (
    <div className="min-h-screen bg-bg">
      <HomeTemplate
        header={
          <MainContentHead breadcrumbs={[{ label: "Home", href: "/" }]}>
            <PageTitle
              title="SwAdmin"
              description="A comprehensive admin interface for managing your application."
            />
          </MainContentHead>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <LinkCard
              key={index}
              title={card.title}
              description={card.description}
              to={card.link?.to}
              icon={card.icon}
            />
          ))}
        </div>
      </HomeTemplate>
    </div>
  );
};

export default Home;
