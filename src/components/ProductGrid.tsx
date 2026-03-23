import { useMemo } from 'react';
import { categorias } from '../data/config';
import type { CategoryId, Product } from '../types/Product';
import { ProductCard } from './ProductCard';
import styles from './ProductGrid.module.css';

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  const emojiByCategory = useMemo(() => {
    const map = new Map<CategoryId, string>();
    for (const cat of categorias) map.set(cat.id, cat.emoji);
    return map;
  }, []);

  return (
    <div className={styles.grid} role="list" aria-label="Lista de produtos">
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard
            product={product}
            categoryEmoji={emojiByCategory.get(product.categoria) ?? ''}
          />
        </div>
      ))}
    </div>
  );
}

