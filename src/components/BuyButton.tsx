"use client";

import { ShoppingCart } from "lucide-react";
import { PRODUCT } from "@/lib/product";
import { buildCheckoutUrl } from "@/lib/tracking";
import { trackMetaEvent } from "@/components/MetaPixel";

type Props = {
  label?: string;
  className?: string;
};

export default function BuyButton({
  label = "QUERO MEU AB TOMIC",
  className = "",
}: Props) {
  function goToCheckout() {
    // Dispara o InitiateCheckout no Meta Pixel
    trackMetaEvent("InitiateCheckout", {
      content_ids: ["ab-tomic"],
      content_name: "Aparelho Abdominal AB Tomic",
      content_type: "product",
      value: 109.9,
      currency: "BRL",
      num_items: 1,
    });

    // Mantém UTMs, fbclid e demais parâmetros
    const checkoutUrl = buildCheckoutUrl(PRODUCT.checkoutUrl);

    // Redireciona para o checkout
    window.location.href = checkoutUrl;
  }

  return (
    <button
      type="button"
      className={`buyButton ${className}`}
      onClick={goToCheckout}
    >
      <ShoppingCart size={19} strokeWidth={2.4} />
      {label}
    </button>
  );
}
