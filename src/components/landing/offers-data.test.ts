import { test, expect } from "bun:test";
import { OFFERS } from "./offers-data";

/** Preços exatos da campanha Pré Black, conferidos dígito por dígito. */
test("7 cards na ordem exata", () => {
  expect(OFFERS.map((o) => o.name)).toEqual([
    "CAMISETA FIO 30.1",
    "OVERSIZED SUEDINE",
    "MALHA EGÍPCIA FIO 50.1",
    "BONÉ PREMIUM",
    "BERMUDA ELASTANO",
    "BERMUDA LINHO",
    "CAIXA DE CUECA"
  ]);
});

test("âncoras exatas", () => {
  expect(OFFERS.map((o) => o.anchor)).toEqual([
    "R$ 13,99",
    "R$ 32,99",
    "R$ 28,99",
    "R$ 17,99",
    "R$ 16,59",
    "R$ 24,99",
    "R$ 28,99"
  ]);
});

test("faixas da camiseta e do oversized", () => {
  expect(OFFERS[0].tiers?.map((t) => `${t.label} ${t.price}`)).toEqual([
    "20 peças R$ 16,50",
    "50 peças R$ 15,50",
    "200 peças R$ 13,99"
  ]);
  expect(OFFERS[1].tiers?.map((t) => `${t.label} ${t.price}`)).toEqual([
    "10 peças R$ 33,50",
    "Acima de 50 peças R$ 32,99"
  ]);
});

test("só os dois primeiros cards têm faixas", () => {
  expect(OFFERS.slice(2).every((o) => o.tiers === undefined)).toBe(true);
});

test("maior lote é a faixa destacada", () => {
  const best = (i: number) => OFFERS[i].tiers?.filter((t) => t.best).map((t) => t.label);
  expect(best(0)).toEqual(["200 peças"]);
  expect(best(1)).toEqual(["Acima de 50 peças"]);
});
