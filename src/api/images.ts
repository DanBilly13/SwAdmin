// Base URL for the GitHub Pages hosted image API
const BASE_URL = 'https://cdn.jsdelivr.net/gh/DanBilly13/sw-admin-assets@main/api/v1';

export type ImageType = 'avatars' | 'team-badges' | 'thumbnails';

export interface ImageApiResponse {
  url: string;
  type: ImageType;
  filename: string;
}

/**
 * Get the full URL for an image from our GitHub-hosted image API
 * @param type The type of image (avatars, team-badges, thumbnails)
 * @param filename The filename of the image
 * @returns The full URL to the image
 */
export const getImageUrl = (type: ImageType, filename: string): string => {
  return `${BASE_URL}/${type}/${filename}`;
};

/**
 * Convert a local image path to an API URL
 * @param localPath The local path (e.g., "/images/avatars/TheRock.jpg")
 * @returns The API URL for the image
 */
export const convertLocalPathToApiUrl = (localPath: string): string => {
  // Extract the type and filename from the local path
  const match = localPath.match(/\/images\/([^/]+)\/([^/]+)$/);
  if (!match) {
    console.warn(`Invalid image path format: ${localPath}`);
    return localPath;
  }

  const [, type, filename] = match;
  return getImageUrl(type as ImageType, filename);
};

/**
 * Get all available images of a specific type
 * @param type The type of images to get
 * @returns Array of image URLs
 */
export const getImagesByType = async (type: ImageType): Promise<ImageApiResponse[]> => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/index.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch images of type ${type}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching images of type ${type}:`, error);
    return [];
  }
};
