import React from "react";
import { Outlet } from "react-router-dom";
import { GridWithNav } from "../components/templates/GridWithNav/GridWithNav";
import { AnvandareNav } from "../components/molecules/AnvandareNav";

export const AnvandareLayout = () => {
  const navigation = [
    { name: "Översikt", href: "/anvandare" },
    { name: "Användare", href: "/anvandare/users" },
    { name: "Konto", href: "/anvandare/account" },
    { name: "Lagroller", href: "/anvandare/lagroller" },
    { name: "Följande", href: "/anvandare/foljande" },
    { name: "Inlägg & Kommentarer", href: "/anvandare/inlagg-och-kommentarer" },
    { name: "Inskickade rapporter", href: "/anvandare/inskickade-rapporter" },
    { name: "Inköp", href: "/anvandare/inkop" },
    { name: "Behörighet", href: "/anvandare/behorighet" },
  ];

  return (
    <GridWithNav navigation={<AnvandareNav navigation={navigation} />}>
      <Outlet />
    </GridWithNav>
  );
};

export default AnvandareLayout;
