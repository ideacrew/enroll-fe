export function removeAuthToken(path: string): string {
  if (path.includes('?auth-token')) {
    const authTokenPosition = path.search(/\?auth-token/);

    return path.slice(0, authTokenPosition);
  } else {
    return path;
  }
}
