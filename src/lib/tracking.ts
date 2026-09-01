export function buildCheckoutUrl(baseUrl: string) {
  if (typeof window === "undefined") return baseUrl;

  const destination = new URL(baseUrl, window.location.origin);
  const current = new URLSearchParams(window.location.search);

  current.forEach((value, key) => {
    destination.searchParams.set(key, value);
  });

  // Origem oficial desta landing page. Mantém fbclid, UTMs e demais parâmetros.
  destination.searchParams.set("source", "LP-GPT");

  return destination.toString();
}
