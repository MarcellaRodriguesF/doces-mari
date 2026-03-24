import { siteConfig } from "../data/config";
import styles from "./OrderInfo.module.css";

/** Formata 55 + DDD + 9 dígitos para exibição (+55 (XX) XXXXX-XXXX) */
function formatarWhatsAppExibicao(digits: string): string {
  const n = digits.replace(/\D/g, "");
  // Remove o 55 inicial se existir
  let local = n;
  if (local.startsWith("55")) {
    local = local.slice(2);
  }
  if (local.length >= 11) {
    const ddd = local.slice(0, 2);
    const rest = local.slice(2);
    if (rest.length >= 9) {
      return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
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
        <div className={styles.card}>
          <h2 className={styles.title}>Informações</h2>
          <div className={styles.row}>
            <div className={styles.block}>
              <h3 className={styles.cardTitle}>Forma de pagamento</h3>
              <p className={styles.cardText}>Aceitamos PIX ou dinheiro.</p>
            </div>
            <div
              className={styles.separator}
              role="separator"
              aria-orientation="vertical"
            />
            <div className={styles.block}>
              <h3 className={styles.cardTitle}>WhatsApp</h3>
              <p className={styles.phone}>{numeroExibicao}</p>
              <a
                className={styles.waLink}
                href={linkWhatsAppEncomenda}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero fazer um pedido
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
