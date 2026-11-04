/**
 * Dados da seção "OFERTAS PRÉ BLACK".
 * Valores exatos da campanha — nenhum preço novo pode ser acrescentado aqui.
 */
export interface OfferTier {
  /** Faixa de lote, ex.: "20 peças" */
  label: string;
  /** Preço por peça nessa faixa */
  price: string;
  /** true = faixa mais vantajosa (maior lote) */
  best?: boolean;
}

export interface Offer {
  /** Nome do produto (Anton, maiúsculo) */
  name: string;
  /** Faixas de lote; ausente = card com apenas a âncora */
  tiers?: OfferTier[];
  /** Preço âncora em destaque, ex.: "a partir de R$ 13,99" */
  anchor: string;
}

export const OFFERS: Offer[] = [
  {
    name: "CAMISETA FIO 30.1",
    tiers: [
      { label: "20 peças", price: "R$ 16,50" },
      { label: "50 peças", price: "R$ 15,50" },
      { label: "200 peças", price: "R$ 13,99", best: true }
    ],
    anchor: "R$ 13,99"
  },
  {
    name: "OVERSIZED SUEDINE",
    tiers: [
      { label: "10 peças", price: "R$ 33,50" },
      { label: "Acima de 50 peças", price: "R$ 32,99", best: true }
    ],
    anchor: "R$ 32,99"
  },
  { name: "MALHA EGÍPCIA FIO 50.1", anchor: "R$ 28,99" },
  { name: "BONÉ PREMIUM", anchor: "R$ 17,99" },
  { name: "BERMUDA ELASTANO", anchor: "R$ 16,59" },
  { name: "BERMUDA LINHO", anchor: "R$ 24,99" },
  { name: "CAIXA DE CUECA", anchor: "R$ 28,99" }
];
