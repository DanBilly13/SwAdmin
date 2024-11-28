import React from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { SectionCard } from "../../components/atoms/SectionCard/SectionCard";

const Inkop = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Användare", href: "/anvandare" },
          { label: "Inköp", href: "/anvandare/inkop" },
        ]}
        onMenuClick={toggleDrawer}
      />

      <PageTitle title="Inköp" description="Something"></PageTitle>

      <div className="space-y-8">
        <SectionCard title={""} children={undefined}>
          {/* Purchases content will go here */}
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Inkop;
