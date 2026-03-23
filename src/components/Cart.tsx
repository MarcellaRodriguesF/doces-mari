import { useEffect, type MouseEvent } from 'react';
import { useCart } from '../context/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { openWhatsApp } from '../utils/whatsapp';
import styles from './Cart.module.css';

export function Cart() {
  const {
    items,
    totalItems,
    totalPrice,
    isCartOpen,
    closeCart,
    toggleCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;

    // Mantém a página "congelada" enquanto o carrinho está aberto.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [closeCart, isCartOpen]);

  const hasConsulta = items.some((i) => i.precoUnitario === 0);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    // Fecha apenas quando o usuário clicar no "fundo" (overlay).
    if (e.target === e.currentTarget) closeCart();
  };

  return (
    <div
      className={`${styles.root} ${isCartOpen ? styles.open : ''}`}
      aria-hidden={!isCartOpen}
    >
      <div className={styles.overlay} onClick={handleOverlayClick} />

      <aside
        className={styles.cart}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de pedidos"
      >
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              Seu pedido{totalItems > 0 ? ` (${totalItems})` : ''}
            </h2>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeCart}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {items.length === 0 ? (
            <p className={styles.empty}>Seu carrinho está vazio.</p>
          ) : (
            <ul className={styles.items} aria-label="Itens do carrinho">
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemName}>
                      {item.nome}
                      {item.sabor ? (
                        <span className={styles.itemMeta}>
                          {' '}
                          ({item.sabor})
                        </span>
                      ) : null}
                    </div>
                    {item.opcao ? (
                      <div className={styles.itemSubMeta}>{item.opcao}</div>
                    ) : null}
                    <div className={styles.itemPrice}>
                      {item.precoUnitario === 0
                        ? 'Sob consulta'
                        : formatCurrency(item.precoUnitario * item.quantidade)}
                    </div>
                  </div>

                  <div className={styles.controls}>
                    <div className={styles.qtyControls} aria-label="Quantidade">
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.id, item.quantidade - 1)
                        }
                        disabled={item.quantidade <= 1}
                        aria-label="Diminuir"
                      >
                        -
                      </button>
                      <span className={styles.qty}>{item.quantidade}</span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.id, item.quantidade + 1)
                        }
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                      aria-label="Remover item"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>
              Total{hasConsulta ? ' (parcial)' : ''}
            </span>
            <span className={styles.totalValue}>{formatCurrency(totalPrice)}</span>
          </div>

          <button
            type="button"
            className={styles.primaryBtn}
            disabled={items.length === 0}
            onClick={() => openWhatsApp(items, totalPrice)}
          >
            Enviar pedido via WhatsApp
          </button>

          <button
            type="button"
            className={styles.secondaryBtn}
            disabled={items.length === 0}
            onClick={clearCart}
          >
            Limpar carrinho
          </button>

          <button
            type="button"
            className={styles.ghostBtn}
            onClick={toggleCart}
          >
            Fechar
          </button>
        </div>
      </aside>
    </div>
  );
}

