import { AvatarProps } from "../../Avatar/Avatar";
import { TableSortDirection } from "../types";

/**
 * Returns the ARIA sort value for a table cell based on its sort direction
 */
export const getAriaSortValue = (sortDirection?: TableSortDirection) => {
  if (!sortDirection) return "none";
  return sortDirection;
};

/**
 * Utility function to adjust avatar src path based on environment
 */
export const getAdjustedAvatarProps = (avatar: Omit<AvatarProps, "className">) => {
  const isDev = import.meta.env.DEV;
  return {
    ...avatar,
    src: avatar.src
      ? isDev
        ? avatar.src.replace("/SwAdmin/", "/")
        : avatar.src
      : undefined,
  };
};
