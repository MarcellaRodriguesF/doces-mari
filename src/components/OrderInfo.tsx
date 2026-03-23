import { siteConfig } from "../data/config";
import styles from "./OrderInfo.module.css";

/** Formata 55 + DDD + 9 dígitos para exibição (+55 (XX) XXXXX-XXXX) */
function formatarWhatsAppExibicao(digits: string): string {
  const n = digits.replace(/\D/g, "");
  if (n.length >= 13 && n.startsWith("55")) {
    const ddd = n.slice(2, 4);
    const rest = n.slice(4);
    if (rest.length >= 9) {
      return `+55 (${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
    }
  }
  return digits;
}

const mensagemEncomenda =
  "Olá! Gostaria de informações sobre pedidos sob encomenda.";

export function OrderInfo() {
  const numeroExibicao =
    siteConfig.whatsappExibicao?.trim() ||
    formatarWhatsAppExibicao(siteConfig.whatsappNumero);

  const linkWhatsAppEncomenda = `https://wa.me/${siteConfig.whatsappNumero}?text=${encodeURIComponent(mensagemEncomenda)}`;

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Informações</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              💬
            </span>
            <h3 className={styles.cardTitle}>Pedidos sob encomenda</h3>
            <p className={styles.cardText}>
              Fale conosco pelo WhatsApp para orçamentos, prazos e disponibilidade.
            </p>
            <p className={styles.phone}>{numeroExibicao}</p>
            <a
              className={styles.waLink}
              href={linkWhatsAppEncomenda}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp
            </a>
          </div>

          <div className={styles.card}>
            <span className={styles.icon} aria-hidden>
              💳
            </span>
            <h3 className={styles.cardTitle}>Forma de pagamento</h3>
            <p className={styles.cardText}>Aceitamos PIX ou dinheiro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
