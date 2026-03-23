export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatPrice(preco: number): string {
  if (preco === 0) return 'Sob consulta';
  return formatCurrency(preco);
}
