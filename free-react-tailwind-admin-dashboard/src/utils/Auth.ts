const TokenKey = 'Admin-Token';

export function useAuthToken() {
  // Get token from localStorage
  const getToken = (): string | null => {
    return localStorage.getItem(TokenKey);
  };

  // Set token to localStorage
  const setToken = (token: string): void => {
    localStorage.setItem(TokenKey, token);
  };

  // Remove token from localStorage
  const removeToken = (): void => {
    localStorage.removeItem(TokenKey);
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
}
