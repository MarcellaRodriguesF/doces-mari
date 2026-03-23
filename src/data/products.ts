import type { Product } from '../types/Product';
import pirulito from '../assets/products/pirulito.png';
import boloDePote from '../assets/products/bolo-pote.png';
import boloCaseiro from '../assets/products/bolo-caseiro.png';
import brigadeiro from '../assets/products/brigadeiro.png';
import beijinho from '../assets/products/beijinho.png';
import cajuzinho from '../assets/products/cajuzinho.png';
import brigadeiroGourmet from '../assets/products/brigadeiro-gourmet.png';
import casadinho from '../assets/products/casadinho.png';
import ovoCoraoLapidado from '../assets/products/ovo-coracao-lapidado.png';
import ovoTradicional from '../assets/products/ovo-tradicional.png';
import ovoColher from '../assets/products/ovo-pascoa.png';

export const products: Product[] = [
  // ── Doces ──
  {
    id: 'pirulito-chocolate',
    nome: 'Pirulito de Chocolate',
    preco: 5,
    categoria: 'doces',
    tipo: 'unico',
    descricao: 'Pirulito artesanal de chocolate ao leite',
    imagem: pirulito,
  },

  // ── Bolos de Pote ──
  {
    id: 'bolo-de-pote',
    nome: 'Bolo de Pote',
    preco: 10,
    categoria: 'bolos-de-pote',
    tipo: 'selecionavel',
    descricao: 'Camadas generosas de bolo e recheio no potinho',
    sabores: ['Morango', 'Chocolate', 'Ninho', 'Prestígio', 'Churros', 'Maracujá'],
    destaque: true,
    imagem: boloDePote,
  },

  // ── Bolos Caseiros ──
  {
    id: 'bolo-caseiro',
    nome: 'Bolo Caseiro',
    preco: 0,
    categoria: 'bolos-caseiros',
    tipo: 'selecionavel',
    descricao: 'Bolo caseiro feito com ingredientes selecionados',
    sabores: ['Chocolate', 'Cenoura com Chocolate', 'Fubá', 'Milho', 'Laranja'],
    imagem: boloCaseiro,
  },

  // ── Especial de Páscoa ──
  
  {
    id: 'ovo-coracao-lapidado',
    nome: 'Ovo de Coração Lapidado',
    preco: 0,
    categoria: 'especial-de-pascoa',
    tipo: 'quantidade',
    descricao: 'Recheado generosamente com o sabor desejado',
    opcoes: [
      { label: '1 parte', preco: 49 },
      { label: '2 partes', preco: 99 },
    ],
    imagem: ovoCoraoLapidado,
  },

  {
    id: 'ovo-coracao-tradicional',
    nome: 'Ovo Tradicional',
    preco: 0,
    categoria: 'especial-de-pascoa',
    tipo: 'quantidade',
    descricao: 'Recheado generosamente com o sabor desejado',
    opcoes: [
      { label: '1 parte', preco: 49 },
      { label: '2 partes', preco: 99 },
      { label: 'Pequeno', preco: 19.50 },
    ],
    imagem: ovoTradicional,
  },

  {
    id: 'ovo-trufado',
    nome: 'Ovo de colher',
    preco: 0,
    categoria: 'especial-de-pascoa',
    tipo: 'quantidade',
    descricao: 'Recheado generosamente com o sabor desejado',
    opcoes: [
      { label: 'Coração lapidado', preco: 49 },
      { label: 'Tradicional ', preco: 49 },
      { label: 'Tradicional pequeno', preco: 19.50 },
    ],
    imagem: ovoColher,
  },
  
 
 
 
  // ── Doces para Festa ──
  {
    id: 'brigadeiro-festa',
    nome: 'Brigadeiro',
    preco: 0,
    categoria: 'doces-para-festa',
    tipo: 'quantidade',
    descricao: 'Brigadeiro tradicional enrolado à mão',
    opcoes: [
      { label: 'Unidade', preco: 1.50 },
      { label: 'Meio cento (50un)', preco: 75.00 },
      { label: 'Cento (100un)', preco: 150.00 },
    ],
    imagem: brigadeiro,
  },
  {
    id: 'beijinho-festa',
    nome: 'Beijinho',
    preco: 0,
    categoria: 'doces-para-festa',
    tipo: 'quantidade',
    descricao: 'Beijinho de coco enrolado à mão',
    opcoes: [
      { label: 'Unidade', preco: 1.50 },
      { label: 'Meio cento (50un)', preco: 75.00 },
      { label: 'Cento (100un)', preco: 150.00 },
    ],
    imagem: beijinho,
  },
  {
    id: 'cajuzinho-festa',
    nome: 'Cajuzinho',
    preco: 0,
    categoria: 'doces-para-festa',
    tipo: 'quantidade',
    descricao: 'Cajuzinho cremoso com amendoim',
    opcoes: [
      { label: 'Unidade', preco: 1.50 },
      { label: 'Meio cento (50un)', preco: 75.00 },
      { label: 'Cento (100un)', preco: 150.00 },
    ],
    imagem: cajuzinho,
  },
  {
    id: 'brigadeiro-gourmet-festa',
    nome: 'Brigadeiro Gourmet',
    preco: 0,
    categoria: 'doces-para-festa',
    tipo: 'quantidade',
    descricao: 'Brigadeiro gourmet com chocolate belga',
    opcoes: [
      { label: 'Unidade', preco: 1.90 },
      { label: 'Meio cento (50un)', preco: 90.00 },
      { label: 'Cento (100un)', preco: 180.00 },
    ],
    destaque: true,
    imagem: brigadeiroGourmet,
  },
  {
    id: 'casadinho-festa',
    nome: 'Casadinho',
    preco: 0,
    categoria: 'doces-para-festa',
    tipo: 'quantidade',
    descricao: 'Clássico casadinho de chocolate e beijinho',
    opcoes: [
      { label: 'Unidade', preco: 1.50 },
      { label: 'Meio cento (50un)', preco: 75.00 },
      { label: 'Cento (100un)', preco: 150.00 },
    ],
    imagem: casadinho,
  },
];
