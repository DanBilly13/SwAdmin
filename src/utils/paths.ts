export const getAssetPath = (path: string): string => {
  const isDev = import.meta.env.DEV;
  const basePath = isDev ? '' : '.';
  return `${basePath}${path}`;
};
