export const PRODUCT = {
  name: "Aparelho Abdominal AB Tomic",
  subtitle: "6 em 1 Body Crunch",
  price: 109.9,
  compareAtPrice: 189.9,
  installment: "12x de R$ 11,14",
  discountLabel: "42% OFF",

  checkoutUrl:
    process.env.NEXT_PUBLIC_CHECKOUT_URL ||
    "https://mundo-atleta-checkout.vercel.app/",
};

export function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
