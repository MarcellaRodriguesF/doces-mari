import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem } from '../types/Cart';
import { CartContext, type CartContextType } from './cartStore';

function generateCartItemId(item: Omit<CartItem, 'id' | 'quantidade'>): string {
  return [item.productId, item.sabor, item.opcao].filter(Boolean).join('::');
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const notificationTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const showNotification = useCallback((text: string) => {
    if (notificationTimer.current) clearTimeout(notificationTimer.current);
    setNotification(text);
    notificationTimer.current = setTimeout(() => setNotification(null), 2500);
  }, []);

  const addItem = useCallback(
    (newItem: Omit<CartItem, 'id' | 'quantidade'>) => {
      const id = generateCartItemId(newItem);

      setItems((prev) => {
        const existing = prev.find((i) => i.id === id);
        if (existing) {
          return prev.map((i) =>
            i.id === id ? { ...i, quantidade: i.quantidade + 1 } : i,
          );
        }
        return [...prev, { ...newItem, id, quantidade: 1 }];
      });

      const label = newItem.sabor
        ? `${newItem.nome} (${newItem.sabor})`
        : newItem.opcao
          ? `${newItem.nome} — ${newItem.opcao}`
          : newItem.nome;
      showNotification(`${label} adicionado ao pedido!`);
    },
    [showNotification],
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantidade: number) => {
    if (quantidade < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantidade } : i)),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setIsCartOpen(false);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((p) => !p), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantidade, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.precoUnitario * i.quantidade, 0),
    [items],
  );

  const value = useMemo<CartContextType>(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      notification,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
      notification,
    ],
  );

  return <CartContext value={value}>{children}</CartContext>;
}
