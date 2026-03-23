import { useMemo, useState } from 'react';
import { products } from './data/products';
import type { CategoryId } from './types/Product';
import { TopBar } from './components/TopBar';
import { ProductCatalog } from './components/ProductCatalog';
import { OrderInfo } from './components/OrderInfo';
import { Footer } from './components/Footer';
import { Notification } from './components/Notification';
import { CategoryNav } from './components/CategoryNav';
import { Cart } from './components/Cart';

import styles from './App.module.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>(
    'all'
  );

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.categoria === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.app}>
      <TopBar />

      <CategoryNav
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <main className={styles.main}>
        <ProductCatalog products={filteredProducts} />
      </main>

      <OrderInfo />
      <Footer />
      <Cart />
      <Notification />
    </div>
  );
}

export default App;
