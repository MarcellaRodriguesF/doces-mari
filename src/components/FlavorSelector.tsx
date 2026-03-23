import { useEffect, useState } from 'react';
import type { Product, QuantityOption } from '../types/Product';
import { useCart } from '../context/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import styles from './FlavorSelector.module.css';

interface Props {
  product: Product;
  onClose: () => void;
}

export function FlavorSelector({ product, onClose }: Props) {
  const { addItem } = useCart();
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<QuantityOption | null>(null);

  const isFlavor = product.tipo === 'selecionavel';
  const isQuantity = product.tipo === 'quantidade';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleConfirm = () => {
    if (isFlavor && selectedFlavor) {
      addItem({
        productId: product.id,
        nome: product.nome,
        sabor: selectedFlavor,
        precoUnitario: product.preco,
      });
    }

    if (isQuantity && selectedOption) {
      addItem({
        productId: product.id,
        nome: product.nome,
        opcao: selectedOption.label,
        precoUnitario: selectedOption.preco,
      });
    }

    onClose();
  };

  const canConfirm =
    (isFlavor && selectedFlavor !== null) ||
    (isQuantity && selectedOption !== null);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <h3 className={styles.title}>{product.nome}</h3>
        <p className={styles.subtitle}>
          {isFlavor ? 'Escolha o sabor:' : 'Escolha a opção:'}
        </p>

        <div className={styles.options}>
          {isFlavor &&
            product.sabores?.map((sabor) => (
              <button
                key={sabor}
                className={`${styles.option} ${selectedFlavor === sabor ? styles.selected : ''}`}
                onClick={() => setSelectedFlavor(sabor)}
              >
                <span className={styles.optionLabel}>{sabor}</span>
                {product.preco > 0 && (
                  <span className={styles.optionPrice}>
                    {formatCurrency(product.preco)}
                  </span>
                )}
                {product.preco === 0 && (
                  <span className={styles.optionConsulta}>Sob consulta</span>
                )}
              </button>
            ))}

          {isQuantity &&
            product.opcoes?.map((opcao) => (
              <button
                key={opcao.label}
                className={`${styles.option} ${selectedOption?.label === opcao.label ? styles.selected : ''}`}
                onClick={() => setSelectedOption(opcao)}
              >
                <span className={styles.optionLabel}>{opcao.label}</span>
                <span className={styles.optionPrice}>
                  {formatCurrency(opcao.preco)}
                </span>
              </button>
            ))}
        </div>

        <button
          className={styles.confirmBtn}
          disabled={!canConfirm}
          onClick={handleConfirm}
        >
          Adicionar ao pedido
        </button>
      </div>
    </div>
  );
}
