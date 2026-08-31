"use client";

import BuyButton from "./BuyButton";
import { PRODUCT, formatBRL } from "@/lib/product";

export default function StickyBuyBar() {
  return (
    <div className="stickyBuy">
      <div>
        <span>Oferta de hoje</span>
        <strong>{formatBRL(PRODUCT.price)}</strong>
      </div>
      <BuyButton label="COMPRAR AGORA" />
    </div>
  );
}
