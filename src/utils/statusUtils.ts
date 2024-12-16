type StatusConfig = {
  variant: "success" | "error" | "warning" | "info";
  text: string;
} | null;

export const getStatusConfig = (status: string): StatusConfig => {
  switch (status) {
    case "none":
      return null;
    case "Auto Borttaget":
      return {
        variant: "error",
        text: "Auto Borttaget",
      };
    case "Inlägg Borttaget":
      return {
        variant: "error",
        text: "Inlägg Borttaget",
      };
    case "Inlägg återställt":
      return {
        variant: "warning",
        text: "Inlägg återställt",
      };
    case "Anmälan avfärdad":
      return {
        variant: "info",
        text: "Anmälan avfärdad",
      };
    case "Publicerad":
      return {
        variant: "success",
        text: "Publicerad",
      };
    default:
      return {
        variant: "info",
        text: status,
      };
  }
};
