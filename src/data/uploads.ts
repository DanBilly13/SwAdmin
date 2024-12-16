import { getAssetPath } from "../utils/paths";

export type PostType = "comment" | "video" | "image";

export interface Upload {
  id: number;
  postType: PostType;
  thumbnailSrc: string;
  postAuthor: string;
  postText: string;
  date: string;
  status:
    | "Anmälan avfärdad"
    | "Inlägg Borttaget"
    | "Auto Borttaget"
    | "Publicerad"
    | "none";
  statusDate: string;
}

export const uploads: Upload[] = [
  {
    id: 78499,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Alexander Sebastian",
    postText: "Frisparken för Johannes Nilsson",
    date: "Dec 13, 08:45",
    status: "Publicerad",
    statusDate: "Dec 13 2024",
  },
  {
    id: 78498,
    postType: "video",
    thumbnailSrc: getAssetPath("thumbnails/Goal.png"),
    postAuthor: "Alexander Sebastian",
    postText: "Vilken match! 🤯 Så spännande!",
    date: "Dec 12, 12:33",
    status: "Publicerad",
    statusDate: "Dec 12 2024",
  },
  {
    id: 78497,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Alexander Sebastian",
    postText: "Så pinsamt dåliga, sluta spela fotboll om ni inte kan bättre",
    date: "Dec 11, 11:28",
    status: "Inlägg Borttaget",
    statusDate: "Dec 11 2024",
  },
  {
    id: 78496,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Alexander Sebastian",
    postText: "Nej men 2-3 står det nu",
    date: "Dec 10, 18:02",
    status: "Publicerad",
    statusDate: "Dec 10 2024",
  },
  {
    id: 78495,
    postType: "image",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Alexander Sebastian",
    postText:
      "Det är viktigt att vi fortsätter stötta laget, oavsett resultat. Det är så vi bygger upp den där vinnarkulturen. Vi är ett lag, både på och utanför planen! 🙏💪",
    date: "Dec 9, 13:33",
    status: "Publicerad",
    statusDate: "Dec 9 2024",
  },
  {
    id: 78494,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Alexander Sebastian",
    postText: "Domaren verkar vara köpt, katastrof!",
    date: "Dec 8, 09:45",
    status: "Inlägg Borttaget",
    statusDate: "Dec 8 2024",
  },
];
