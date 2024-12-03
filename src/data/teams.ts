import { getAssetPath } from "../utils/paths";

export interface Team {
  id: string;
  klubName: string;
  klubBadge: string;
  lag: string;
  kon: "Male" | "Female";
  sport: string;
  roll: string;
  sasong: string;
  kalla: string;
  divisions: number;
  teamStaff: number;
}

export const teams: Team[] = [
  {
    id: "1",
    klubName: "Ifk Stocksund",
    klubBadge: "/images/team-badges/IFK-Stockholm.png",
    lag: "P19",
    kon: "Male",
    sport: "Football",
    roll: "Staff",
    sasong: "2023-2024",
    kalla: "Fogis 553188",
    divisions: 5,
    teamStaff: 21,
  },
  {
    id: "2",
    klubName: "Brommapojkarna Dff",
    klubBadge: "/images/team-badges/Bromma.jpg",
    lag: "P16",
    kon: "Male",
    sport: "Football",
    roll: "Spelare",
    sasong: "2023-2024",
    kalla: "Fogis 553188",
    divisions: 5,
    teamStaff: 21,
  },
  {
    id: "3",
    klubName: "Orebro Sk Fk",
    klubBadge: "/images/team-badges/orebo.jpg",
    lag: "P16",
    kon: "Male",
    sport: "Football",
    roll: "Guardian",
    sasong: "2023-2024",
    kalla: "Fogis 553188",
    divisions: 5,
    teamStaff: 21,
  },
  {
    id: "4",
    klubName: "Djurgardens If Ff",
    klubBadge: "/images/team-badges/DIF.png",
    lag: "PA19",
    kon: "Male",
    sport: "Football",
    roll: "Staff, Player",
    sasong: "2023-2024",
    kalla: "Fogis 553188",
    divisions: 5,
    teamStaff: 21,
  },
  {
    id: "5",
    klubName: "Gif Sundsvall",
    klubBadge: "/images/team-badges/Gif.png",
    lag: "P16",
    kon: "Male",
    sport: "Football",
    roll: "Staff",
    sasong: "2023-2024",
    kalla: "Sport Admin",
    divisions: 5,
    teamStaff: 21,
  },
  {
    id: "6",
    klubName: "Umeå FC",
    klubBadge: "/images/team-badges/UmeaFC.jpg",
    lag: "P16",
    kon: "Male",
    sport: "Football",
    roll: "Spelare",
    sasong: "2023-2024",
    kalla: "Fogis 553188",
    divisions: 5,
    teamStaff: 21,
  },
  {
    id: "7",
    klubName: "Fc Stockholm Internazionale Ab",
    klubBadge: "/images/team-badges/FCSTOCK.jpg",
    lag: "FC Stockholm",
    kon: "Male",
    sport: "Football",
    roll: "Staff, Spelare, Guardian",
    sasong: "2023-2024",
    kalla: "Fogis 553188",
    divisions: 5,
    teamStaff: 21,
  },
];
