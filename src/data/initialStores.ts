// src/data/initialStores.ts
// Cole AQUI os seus 114 registros de lojas (do seu stores.json original).

export interface Store {
  id: number;
  nome: string;
  /** Preencha com os campos reais do seu JSON */
  [key: string]: unknown;
}

export const INITIAL_STORES: Store[] = [
  // ⬇️ COLE SEUS REGISTROS AQUI (os 114 do seu stores.json)
];
