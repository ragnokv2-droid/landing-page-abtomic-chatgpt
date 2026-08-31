"use client";

import { ShoppingCart } from "lucide-react";
import { PRODUCT } from "@/lib/product";
import { buildCheckoutUrl } from "@/lib/tracking";

type Props = {
  label?: string;
  className?: string;
};

export default function BuyButton({ label = "QUERO MEU AB TOMIC", className = "" }: Props) {
  function goToCheckout() {
    window.location.href = buildCheckoutUrl(PRODUCT.checkoutUrl);
  }

  return (
    <button className={`buyButton ${className}`} onClick={goToCheckout}>
      <ShoppingCart size={19} strokeWidth={2.4} />
      {label}
    </button>
  );
}
