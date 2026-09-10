/**
 * Centralized API Base URL Configuration
 * Reads from VITE_API_URL in .env (or falls back safely to local dev default).
 * Strips any trailing slashes to guarantee clean endpoint concatenation.
 */
export const API_BASE_URL: string = (
  (import.meta.env.VITE_API_URL as string | undefined) ||
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ||
  'http://localhost:5000/api'
).replace(/\/+$/, '');

export default API_BASE_URL;
