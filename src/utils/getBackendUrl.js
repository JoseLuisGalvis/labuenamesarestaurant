export function getBackendUrl() {
  const prodUrl = import.meta.env.VITE_BACKEND_URL;

  // Si estamos en producción, usamos el valor del entorno
  if (import.meta.env.PROD && prodUrl) {
    return prodUrl;
  }

  // Si estamos en desarrollo, usamos localhost
  return "http://localhost:3000";
}
