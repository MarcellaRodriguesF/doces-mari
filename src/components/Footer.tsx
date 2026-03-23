import { siteConfig } from '../data/config';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.brand}>{siteConfig.nome}</p>

        <div className={styles.links}>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumero}`}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
          <span className={styles.separator}>·</span>
          <span className={styles.link}>
            📸 {siteConfig.instagram}
          </span>
        </div>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} {siteConfig.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
