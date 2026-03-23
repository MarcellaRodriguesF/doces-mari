import { useCart } from '../context/useCart';
import styles from './Notification.module.css';

export function Notification() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className={styles.toast} role="status" aria-live="polite">
      <span className={styles.icon}>✓</span>
      <span className={styles.text}>{notification}</span>
    </div>
  );
}
