import { useContext } from 'react';
import { CartContext, type CartContextType } from './cartStore';

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart deve ser usado dentro de CartProvider');
  return ctx;
}

