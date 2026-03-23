export interface CartItem {
  id: string;
  productId: string;
  nome: string;
  precoUnitario: number;
  quantidade: number;
  sabor?: string;
  opcao?: string;
}

