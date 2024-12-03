export const getAssetPath = (path: string): string => {
  // If path starts with a slash, remove it
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Determine the base directory based on the first part of the path
  const baseDir = cleanPath.split('/')[0];
  
  // Remove the base directory from the path
  const relativePath = cleanPath.replace(`${baseDir}/`, '');
  
  // Check if the nested directory exists, if not, use the base directory
  const fullPath = `https://raw.githubusercontent.com/DanBilly13/sw-admin-assets/main/api/v1/${baseDir}/${baseDir}/${relativePath}`;
  const fallbackPath = `https://raw.githubusercontent.com/DanBilly13/sw-admin-assets/main/api/v1/${baseDir}/${relativePath}`;
  
  return fullPath;
};
