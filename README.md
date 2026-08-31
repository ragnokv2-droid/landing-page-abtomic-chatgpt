# Mundo Atleta — Landing Page AB Tomic

Landing page mobile-first em Next.js, pronta para GitHub + Vercel.

## 1. Subir no GitHub
Extraia o ZIP e envie todos os arquivos da pasta para um repositório novo.

## 2. Importar na Vercel
- New Project
- Import Git Repository
- Framework detectado: Next.js
- Deploy

## 3. Checkout
Por padrão, os botões apontam para:

https://mundo-atleta-checkout.vercel.app/

Para alterar sem mexer no código, crie na Vercel a variável:

NEXT_PUBLIC_CHECKOUT_URL=https://seu-checkout.com/

Depois faça Redeploy.

## 4. Rastreamento
Os botões preservam automaticamente os parâmetros presentes na URL, incluindo:
- fbclid
- utm_source
- utm_medium
- utm_campaign
- utm_content
- utm_term
- qualquer outro query param

Exemplo:
/landing?fbclid=123&utm_campaign=teste
-> checkout?fbclid=123&utm_campaign=teste

## 5. Imagens
As imagens em `/public/images` foram preparadas a partir dos materiais que você enviou, mantendo o AB Tomic original.

## 6. Rodar localmente
npm install
npm run dev

Abra http://localhost:3000

## Próximo passo recomendado
Depois do primeiro deploy, revisar no celular e então adicionar Pixel Meta/CAPI e pequenos ajustes finos de conversão.
