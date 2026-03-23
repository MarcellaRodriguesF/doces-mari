export type ProductType = 'unico' | 'selecionavel' | 'quantidade';

export type CategoryId =
  | 'doces'
  | 'bolos-de-pote'
  | 'bolos-caseiros'
  | 'especial-de-pascoa'
  | 'doces-para-festa';

export interface QuantityOption {
  label: string;
  preco: number;
}

export interface Product {
  id: string;
  nome: string;
  preco: number;
  categoria: CategoryId;
  tipo: ProductType;
  descricao?: string;
  sabores?: string[];
  opcoes?: QuantityOption[];
  destaque?: boolean;
  // Opcional: url/rota da imagem do produto para exibir no card
  imagem?: string;
}

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  emoji: string;
  cor: string;
}
