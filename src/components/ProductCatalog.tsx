import type { Product } from '../types/Product';
import { ProductGrid } from './ProductGrid';
import styles from './ProductCatalog.module.css';

interface Props {
  products: Product[];
}

export function ProductCatalog({ products }: Props) {
  return (
    <section className={styles.section} aria-label="Catálogo de produtos">
      <div className={styles.header}>
        <h2 className={styles.title}>Todos os Produtos</h2>
        <p className={styles.subtitle}>{products.length} produtos disponíveis</p>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}

