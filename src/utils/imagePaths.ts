// Helper function to get the correct image path based on environment
export const getImagePath = (imageName: string, type: 'avatars' | 'team-badges' = 'avatars') => {
  // Check if we're in development mode
  const isDev = import.meta.env.DEV;
  const basePath = isDev ? '' : '/SwAdmin';
  return `${basePath}/images/${type}/${imageName}`;
};

// Default images
export const DEFAULT_AVATAR = getImagePath('TheRock.jpg');
export const DEFAULT_TEAM_BADGE = getImagePath('svff.jpg', 'team-badges');
