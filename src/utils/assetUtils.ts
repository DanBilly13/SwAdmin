import { convertLocalPathToApiUrl } from '../api/images';

/**
 * Get the asset path, converting local paths to API URLs in production
 * @param path The local asset path
 * @returns The appropriate path for the current environment
 */
export const getAssetPath = (path: string): string => {
  // In development, use local paths
  if (process.env.NODE_ENV === 'development') {
    return path;
  }

  // In production, convert image paths to API URLs
  if (path.startsWith('/images/')) {
    return convertLocalPathToApiUrl(path);
  }

  return path;
};
