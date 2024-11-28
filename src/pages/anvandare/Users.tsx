import React from "react";
import { ContentContainer } from "../../components/atoms/ContentContainer/ContentContainer";
import { MainContentHead } from "../../components/molecules/MainContentHead/MainContentHead";
import { useDrawerControl } from "../../components/templates";
import { PageTitle } from "../../components/atoms/PageTitle/PageTitle";
import { SectionCard } from "../../components/atoms/SectionCard/SectionCard";

const Users = () => {
  const { toggleDrawer } = useDrawerControl();

  return (
    <ContentContainer>
      <MainContentHead
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Användare", href: "/anvandare" },
          { label: "Användare", href: "/anvandare/users" },
        ]}
        onMenuClick={toggleDrawer}
      />
      <PageTitle 
        title="Användare" 
        description="Hantera och övervaka alla användare i systemet"
      />

      <div className="space-y-8">
        <SectionCard title="Alla användare" children={undefined}>
          {/* Users list and management interface will go here */}
        </SectionCard>
      </div>
    </ContentContainer>
  );
};

export default Users;
