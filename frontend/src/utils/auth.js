const AUTH_STORAGE_KEY = "tradewave-auth";

export function getStoredAuth() {
  try {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    return storedAuth ? JSON.parse(storedAuth) : null;
  } catch (error) {
    return null;
  }
}

export function saveAuth(auth) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
  window.dispatchEvent(new Event("tradewave-auth-changed"));
}

export function clearAuth() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event("tradewave-auth-changed"));
}

export function getAuthToken() {
  return getStoredAuth()?.token || "";
}
