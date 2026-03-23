import type { CategoryConfig } from '../types/Product';

export const siteConfig = {
  nome: 'Doces da Mari',
  headline: 'Doces artesanais feitos com amor',
  subheadline: 'Escolha seus favoritos e envie seu pedido pelo WhatsApp',
  /** DDI + DDD + número, só dígitos (ex.: 5511999999999) — usado em links wa.me */
  whatsappNumero: '(34) 98412-4194',
  /** Número para exibir na interface (opcional; se vazio, formata a partir do whatsappNumero) */
  whatsappExibicao: '',
  horarioFuncionamento: 'Seg a Sex — 9h às 18h | Sáb — 9h às 13h',
  prazoEncomenda: 'Encomendas com antecedência',
  instagram: '@doce_da_marimari',
};

export const categorias: CategoryConfig[] = [
  { id: 'doces', label: 'Doces', emoji: '🍫', cor: '#8B6F47' },
  { id: 'bolos-de-pote', label: 'Bolos de Pote', emoji: '🍰', cor: '#c2727e' },
  { id: 'bolos-caseiros', label: 'Bolos Caseiros', emoji: '🎂', cor: '#d4a574' },
  { id: 'especial-de-pascoa', label: 'Especial de Páscoa', emoji: '🐰', cor: '#9b7cb8' },
  { id: 'doces-para-festa', label: 'Doces para Festa', emoji: '🎉', cor: '#e8a87c' },
];
