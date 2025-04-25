/**
 * Returns the correct image path with the appropriate base URL for the current environment
 * @param path The relative path to the image
 * @returns The complete image path with base URL if needed
 */
export const getImagePath = (path: string): string => {
  // If path already includes http or is a data URL, return as is
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // If path already starts with process.env.PUBLIC_URL, return as is
  if (path.includes(process.env.PUBLIC_URL || '')) {
    return path;
  }

  // If path starts with a slash, ensure it's correctly prefixed
  if (path.startsWith('/')) {
    return `${process.env.PUBLIC_URL}${path}`;
  }

  // Otherwise add slash between PUBLIC_URL and path
  return `${process.env.PUBLIC_URL}/${path}`;
};
