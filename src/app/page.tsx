import Image from "next/image";
import {
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import BuyButton from "@/components/BuyButton";
import StickyBuyBar from "@/components/StickyBuyBar";
import { PRODUCT, formatBRL } from "@/lib/product";

const benefits = [
  "Movimento guiado para treinar com mais controle",
  "Resistência regulável para acompanhar sua evolução",
  "Trabalha abdômen superior, inferior, lateral, lombar, braços e coxas",
  "Compacto, dobrável e fácil de guardar",
];

const reviews = [
  { name: "Rosangela M.", text: "Também fiquei na dúvida, mas gostei bastante da compra.", img: "/images/review-1.png" },
  { name: "Patricia S.", text: "Amei. Fácil de usar e muito prático para treinar em casa.", img: "/images/review-2.png" },
  { name: "Sandra H.", text: "Achei bem mais confortável do que fazer abdominal direto no chão.", img: "/images/review-3.png" },
  { name: "Marcia R.", text: "Chegou certinho e é simples de usar. Estou usando com frequência.", img: "/images/review-4.png" },
  { name: "Ana D.", text: "Comprei com receio, mas o produto me surpreendeu pela praticidade.", img: "/images/review-5.png" },
];

export default function Home() {
  return (
    <main>
      <section className="topStrip">
        <span><PackageCheck size={16}/> Envio para todo o Brasil</span>
        <span><ShieldCheck size={16}/> Compra protegida</span>
        <span><LockKeyhole size={16}/> Pagamento seguro</span>
      </section>

      <header className="siteHeader shell">
        <Image src="/images/logo.png" width={145} height={60} alt="Mundo Atleta" priority />
        <div className="headerTrust"><BadgeCheck size={18}/> Loja oficial Mundo Atleta</div>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <span className="eyebrow">🔥 TREINE EM CASA COM PRATICIDADE</span>
          <h1>Aparelho Abdominal <em>AB TOMIC</em></h1>
          <h2>6 em 1 Body Crunch</h2>
          <p className="heroLead">Um aparelho compacto para trabalhar diferentes regiões musculares com movimento guiado e resistência regulável.</p>

          <div className="rating"><span className="stars">★★★★★</span><strong>5.0</strong><span>avaliações de clientes</span></div>

          <div className="mobileProduct">
            <Image src="/images/hero-product.png" width={620} height={620} alt="Aparelho Abdominal AB Tomic" priority />
          </div>

          <ul className="heroBullets">
            {benefits.map((item) => <li key={item}><Check size={18}/>{item}</li>)}
          </ul>

          <div className="priceBox">
            <small>De <s>{formatBRL(PRODUCT.compareAtPrice)}</s></small>
            <div className="priceLine"><span>por</span><strong>{formatBRL(PRODUCT.price)}</strong><b>{PRODUCT.discountLabel}</b></div>
            <p>ou {PRODUCT.installment}</p>
          </div>

          <BuyButton />
          <div className="microTrust"><span><Truck size={16}/> Frete grátis</span><span><LockKeyhole size={16}/> Compra segura</span></div>
        </div>

        <div className="heroVisual">
          <div className="productGlow"></div>
          <Image src="/images/hero-product.png" width={680} height={680} alt="AB Tomic com embalagem original" priority />
        </div>
      </section>

      <section className="benefitRail shell">
        <article><Dumbbell/><div><strong>6 em 1</strong><span>Vários grupos musculares</span></div></article>
        <article><Clock3/><div><strong>Treino prático</strong><span>Ideal para sua rotina</span></div></article>
        <article><ShieldCheck/><div><strong>Movimento guiado</strong><span>Mais controle no exercício</span></div></article>
      </section>

      <section className="featureSection shell">
        <div className="featureVisual"><Image src="/images/product-close.png" width={650} height={520} alt="Detalhes do AB Tomic" /></div>
        <div className="featureCopy">
          <span className="sectionTag">POR QUE ESCOLHER O AB TOMIC?</span>
          <h2>Feito para tornar o treino em casa mais simples.</h2>
          <p>Sem ocupar muito espaço e sem transformar sua casa em uma academia. Ajuste a resistência, escolha o exercício e treine no seu ritmo.</p>
          <div className="featureList">
            {benefits.map((item, i) => <div className="featureItem" key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></div>)}
          </div>
          <BuyButton label="COMPRAR MEU AB TOMIC" />
        </div>
      </section>

      <section className="musclesSection">
        <div className="shell musclesInner">
          <div className="sectionCenter">
            <span className="sectionTag">FUNCIONALIDADES</span>
            <h2>Um aparelho. Diversas possibilidades de treino.</h2>
            <p>O sistema permite diferentes movimentos para trabalhar o corpo de forma prática em casa.</p>
          </div>
          <div className="functionsCard"><Image src="/images/functions.png" width={650} height={580} alt="Possibilidades de exercícios com o AB Tomic" /></div>
          <div className="pillGrid">
            {['Abdômen superior','Abdômen inferior','Laterais','Lombar','Braços','Coxas'].map(x => <span key={x}><Check size={15}/>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="reviews shell">
        <div className="sectionCenter">
          <span className="sectionTag">AVALIAÇÕES</span>
          <h2>Veja o AB Tomic na casa de clientes.</h2>
          <div className="rating big"><span className="stars">★★★★★</span><strong>5.0</strong></div>
        </div>
        <div className="reviewGrid">
          {reviews.map((r) => (
            <article className="reviewCard" key={r.name}>
              <Image src={r.img} width={360} height={330} alt={`Foto de avaliação de ${r.name}`} />
              <div className="reviewBody"><strong>{r.name}</strong><span className="stars">★★★★★</span><p>{r.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="offerSection">
        <div className="offerCard shell">
          <div>
            <span className="sectionTag light">OFERTA ESPECIAL</span>
            <h2>Leve o AB Tomic para sua rotina.</h2>
            <p>Receba em casa e comece a treinar no seu ritmo.</p>
          </div>
          <div className="offerPrice">
            <small>De <s>{formatBRL(PRODUCT.compareAtPrice)}</s></small>
            <strong>{formatBRL(PRODUCT.price)}</strong>
            <span>{PRODUCT.installment}</span>
            <BuyButton label="QUERO APROVEITAR" />
            <p className="secure"><LockKeyhole size={15}/> Ambiente de pagamento seguro</p>
          </div>
        </div>
      </section>

      <section className="faq shell">
        <div className="sectionCenter"><span className="sectionTag">DÚVIDAS FREQUENTES</span><h2>Antes de finalizar sua compra</h2></div>
        <div className="faqList">
          {[
            ['O AB Tomic é dobrável?', 'Sim. O formato compacto facilita guardar o aparelho após o uso.'],
            ['A resistência pode ser ajustada?', 'Sim. O aparelho possui sistema de resistência regulável.'],
            ['Quais regiões posso trabalhar?', 'Abdômen superior e inferior, laterais, lombar, braços e coxas, conforme o exercício realizado.'],
            ['Como vou para o pagamento?', 'Ao tocar em Comprar Agora, você será direcionado ao checkout seguro da Mundo Atleta.'],
          ].map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}
        </div>
      </section>

      <footer>
        <div className="shell footerInner"><Image src="/images/logo.png" width={125} height={50} alt="Mundo Atleta"/><p>© Mundo Atleta. Todos os direitos reservados.</p></div>
      </footer>
      <StickyBuyBar />
    </main>
  );
}
