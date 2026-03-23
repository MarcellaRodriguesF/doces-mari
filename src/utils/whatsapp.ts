import type { CartItem } from '../types/Cart';
import { siteConfig } from '../data/config';
import { formatCurrency } from './formatCurrency';

function formatItemLine(item: CartItem): string {
  const name = item.sabor
    ? `${item.nome} (${item.sabor})`
    : item.opcao
      ? `${item.nome} — ${item.opcao}`
      : item.nome;

  const price =
    item.precoUnitario === 0
      ? 'Sob consulta'
      : `${item.quantidade}x = ${formatCurrency(item.precoUnitario * item.quantidade)}`;

  return `- ${name} — ${price}`;
}

export function buildWhatsAppMessage(items: CartItem[], total: number): string {
  const lines = items.map(formatItemLine);
  const hasConsulta = items.some((i) => i.precoUnitario === 0);

  let message = `Olá! Quero fazer um pedido:\n\n${lines.join('\n')}`;

  message += `\n\nTotal: ${formatCurrency(total)}`;

  if (hasConsulta) {
    message += '\n\n*Alguns itens estão sob consulta de preço.';
  }

  message += '\n\nPode me passar disponibilidade e prazo de encomenda?';

  return message;
}

export function openWhatsApp(items: CartItem[], total: number): void {
  const message = buildWhatsAppMessage(items, total);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${siteConfig.whatsappNumero}?text=${encoded}`;
  window.open(url, '_blank');
}
