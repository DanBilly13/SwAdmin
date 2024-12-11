import { getAssetPath } from "../utils/paths";

export type PostType = "comment" | "video" | "image";

export interface Upload {
  id: number;
  postType: PostType;
  thumbnailSrc: string;
  postAuthor: string;
  postText: string;
  date: string;
  status: "Anmälan avfärdad" | "Inlägg Borttaget" | "Auto Borttaget";
  statusDate: string;
  isVideo?: boolean;
}

export const uploads: Upload[] = [
  {
    id: 78499,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "William Svefors kan ju ta sig i röven",
    date: "Nov 10, 16:58",
    status: "Auto Borttaget",
    statusDate: "Nov 12 2024",
    isVideo: false,
  },
  {
    id: 78498,
    postType: "video",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Theo Nott",
    postText: "Olle Oldaeus är väldigt nervös och bränner sin straff i SEF trophy.",
    date: "Nov 5, 12:33",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
    isVideo: true,
  },
  {
    id: 78497,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "2-3 Varberg",
    date: "Nov 11, 11:28",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
    isVideo: false,
  },
  {
    id: 78496,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "Nej men 2-3 står det nu",
    date: "Oct 30, 18:02",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
    isVideo: false,
  },
  {
    id: 78495,
    postType: "image",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Levis Lendgrin",
    postText: "Den var dälig",
    date: "Oct 22, 13:33",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
    isVideo: true,
  },
  {
    id: 78494,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "Vad fan är det för fel på dig",
    date: "Oct 15, 09:45",
    status: "Inlägg Borttaget",
    statusDate: "Nov 12 2024",
    isVideo: false,
  }
];
