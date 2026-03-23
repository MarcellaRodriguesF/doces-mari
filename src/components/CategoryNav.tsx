import type { CategoryId } from '../types/Product';
import { categorias } from '../data/config';
import styles from './CategoryNav.module.css';

interface Props {
  activeCategory: CategoryId | 'all';
  onSelect: (category: CategoryId | 'all') => void;
}

export function CategoryNav({ activeCategory, onSelect }: Props) {
  return (
    <nav className={styles.nav} aria-label="Categorias">
      <div className={styles.inner}>
        <button
          type="button"
          className={`${styles.btn} ${activeCategory === 'all' ? styles.active : ''}`}
          onClick={() => onSelect('all')}
        >
          <span className={styles.emoji} aria-hidden="true">
            ✨
          </span>
          <span className={styles.label}>Todos</span>
        </button>

        {categorias.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`${styles.btn} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => onSelect(cat.id)}
          >
            <span className={styles.emoji} aria-hidden="true">
              {cat.emoji}
            </span>
            <span className={styles.label}>{cat.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

