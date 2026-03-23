import { useState } from 'react';
import type { Product } from '../types/Product';
import { useCart } from '../context/useCart';
import { formatPrice } from '../utils/formatCurrency';
import { FlavorSelector } from './FlavorSelector';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
  categoryEmoji: string;
}

export function ProductCard({ product, categoryEmoji }: Props) {
  const { addItem } = useCart();
  const [showSelector, setShowSelector] = useState(false);

  const handleAdd = () => {
    if (product.tipo === 'unico') {
      addItem({
        productId: product.id,
        nome: product.nome,
        precoUnitario: product.preco,
      });
    } else {
      setShowSelector(true);
    }
  };

  const isConsulta = product.preco === 0;

  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageArea}>
          {product.imagem ? (
            <img
              className={styles.image}
              src={product.imagem}
              alt={product.nome}
              loading="lazy"
            />
          ) : (
            <span className={styles.emoji}>{categoryEmoji}</span>
          )}
          {product.destaque && (
            <span className={styles.badge}>⭐ Popular</span>
          )}
        </div>

        <div className={styles.body}>
          <h3 className={styles.name}>{product.nome}</h3>
          {product.descricao && (
            <p className={styles.description}>{product.descricao}</p>
          )}
          <p className={isConsulta ? styles.consulta : styles.price}>
            {formatPrice(product.preco)}
          </p>
        </div>

        <button className={styles.addBtn} onClick={handleAdd}>
          {product.tipo === 'unico' ? '+ Adicionar' : 'Escolher'}
        </button>
      </article>

      {showSelector && (
        <FlavorSelector
          product={product}
          onClose={() => setShowSelector(false)}
        />
      )}
    </>
  );
}
