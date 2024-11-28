export interface CardData {
  title: string;
  icon: string;
  description: string;
  link?: {
    to: string;
    label: string;
  };
}

export const cards: CardData[] = [
  {
    title: "Design System",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
    link: {
      to: "/colors",
      label: "View Components",
    },
  },
  {
    title: "Användare",
    icon: "person",
    description:
      "Hantera användarkonton, roller och behörigheter. Se användaraktivitet och moderera innehåll.",
    link: {
      to: "/anvandare/account",
      label: "Hantera användare",
    },
  },
  {
    title: "Innehållsmoderering",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
  },
  {
    title: "System Admin",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
  },
  {
    title: "Partner Admin",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
  },
  {
    title: "Utbetalningar",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
  },
  {
    title: "Roles & Authorization",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
  },
  {
    title: "Something Else",
    icon: "diamond",
    description:
      "Suspendisse gravida vestibulum lacus, vitae imperdiet neque sodales non. Integer mattis nibh non ligula convallis pretium.",
  },
];
