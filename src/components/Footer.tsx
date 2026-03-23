import { siteConfig } from "../data/config";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.brand}>{siteConfig.nome}</p>

        <div className={styles.links}>
          <span className={styles.link}> {siteConfig.whatsappNumero}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.link}>
            <a
              href={`https://instagram.com/${siteConfig.instagram.replace(/^@/, "")}`}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ verticalAlign: "middle", marginRight: "0.35em" }}
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
              {siteConfig.instagram}
            </a>
          </span>
        </div>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} {siteConfig.nome}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
