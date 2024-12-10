import { getAssetPath } from "../utils/paths";

export type PostType = "comment" | "video" | "image";

export interface Report {
  id: number;
  postType: PostType;
  thumbnailSrc: string;
  postAuthor: string;
  postText: string;
  firstReporter?: string;
  firstReason?: string;
  firstReportDate?: string;
  secondReporter?: string;
  secondReason?: string;
  secondReportDate?: string;
  date: string;
  status: "Anmälan avfärdad" | "Inlägg Borttaget";
  statusDate: string;
  isVideo?: boolean;
}

export const reports: Report[] = [
  {
    id: 78499,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Sixten Eklöf",
    postText: "William Svefors kan ju ta sig i röven",
    firstReporter: "Alexander Sebastian",
    firstReason: "Olämpliga kommentarer",
    firstReportDate: "Nov 10, 16:58",
    secondReporter: "Isabella Charlotta",
    secondReason: "Vidrigt beteende",
    secondReportDate: "Nov 10, 16:58",
    date: "Nov 10, 16:58",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
    isVideo: false,
  },
  {
    id: 78498,
    postType: "video",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Theo Nott",
    postText:
      "Olle Oldaeus är väldigt nervös och bränner sin straff i SEF trophy.",
    firstReporter: "Alexander Sebastian",
    firstReason: "Vad fan gir han mobbning",
    firstReportDate: "Nov 5, 12:33",
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
    firstReporter: "Alexander Sebastian",
    firstReason: "felaktiga uppgifter angående",
    firstReportDate: "Nov 11, 11:28",
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
    firstReporter: "Alexander Sebastian",
    firstReason: "Vidrigt beteende",
    firstReportDate: "Oct 30, 18:02",
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
    firstReporter: "Alexander Sebastian",
    firstReason: "Inte fin dom kan ej up föra",
    firstReportDate: "Oct 22, 13:33",
    date: "Oct 22, 13:33",
    status: "Anmälan avfärdad",
    statusDate: "Nov 12 2024",
    isVideo: true,
  },
  {
    id: 78494,
    postType: "comment",
    thumbnailSrc: getAssetPath("avatars/TheRock.jpg"),
    postAuthor: "Jasmine Benjelloun",
    postText:
      "Gå in i dom GBG dom e asss ät up dom dom suger period speciellt deras p/tränare period 😏",
    firstReporter: "Alexander Sebastian",
    firstReason: "Sådanna kommentarer vill vi slippa i ungdomsfotbollen",
    firstReportDate: "Oct 13, 11:16",
    date: "Oct 13, 11:16",
    status: "Inlägg Borttaget",
    statusDate: "Nov 12 2024",
    isVideo: false,
  },
];
