import { useCart } from "../context/useCart";
import logo from "../assets/logo.png";
import styles from "./TopBar.module.css";

export function TopBar() {
  const { totalItems, toggleCart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand} aria-label="Marca">
          <img
            src={logo}
            aria-hidden="true"
            alt="Logo"
            className={styles.logo}
          />
        </div>

        <button
          className={styles.cartBtn}
          onClick={toggleCart}
          aria-label={`Abrir carrinho com ${totalItems} itens`}
        >
          <svg
            className={styles.cartIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className={styles.cartText}>Carrinho</span>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </button>
      </div>
    </header>
  );
}
