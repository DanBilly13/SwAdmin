import { getAssetPath } from "../utils/paths";

export type PostType = "comment" | "video" | "image";

export interface Report {
  id: number;
  postType: PostType;
  thumbnailSrc: string;
  postAuthor: string;
  postText: string;
  reportedBy: string[];
  reasons: string[];
  date: string;
  status: "Anmälan avfärdad" | "Inlägg Borttaget";
  statusDate: string;
}

export const reports: Report[] = [
  {
    id: 78499,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "William Svefors kan ju ta sig i röven",
    reportedBy: ["Alexander Sebastian", "Isabella Charlotta"],
    reasons: ["Olämpliga kommentarer", "Vidrigt beteende"],
    date: "Nov 10, 16:58",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
  },
  {
    id: 78498,
    postType: "video",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Theo Nott",
    postText:
      "Olle Oldaeus är väldigt nervös och bränner sin straff i SEF trophy.",
    reportedBy: ["Alexander Sebastian"],
    reasons: ["Vad fan gir han mobbning"],
    date: "Nov 5, 12:33",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
  },
  {
    id: 78497,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "2-3 Varberg",
    reportedBy: ["Alexander Sebastian"],
    reasons: ["felaktiga uppgifter angående"],
    date: "Nov 11, 11:28",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
  },
  {
    id: 78496,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "Nej men 2-3 står det nu",
    reportedBy: ["Alexander Sebastian"],
    reasons: ["Vidrigt beteende"],
    date: "Oct 30, 18:02",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
  },
  {
    id: 78495,
    postType: "image",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Levis Lendgrin",
    postText: "Den var dälig",
    reportedBy: ["Alexander Sebastian"],
    reasons: ["Inte fin dom kan ej up föra"],
    date: "Oct 22, 13:33",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
  },
  {
    id: 78494,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Jasmine Benjelloun",
    postText:
      "Gå in i dom GBG dom e asss ät up dom dom suger period speciellt deras p/tränare period 😏",
    reportedBy: ["Alexander Sebastian"],
    reasons: ["Sådanna kommentarer vill"],
    date: "Oct 13, 11:16",
    status: "Inlägg Borttaget",
    statusDate: "Nov 12 2024",
  },
];
