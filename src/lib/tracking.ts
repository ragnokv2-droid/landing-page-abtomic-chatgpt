export function buildCheckoutUrl(baseUrl: string) {
  if (typeof window === "undefined") return baseUrl;

  const destination = new URL(baseUrl, window.location.origin);
  const current = new URLSearchParams(window.location.search);

  current.forEach((value, key) => {
    destination.searchParams.set(key, value);
  });

  return destination.toString();
}
