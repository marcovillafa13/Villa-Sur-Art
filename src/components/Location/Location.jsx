import styles from './Location.module.css'
import { WHATSAPP_NUMBER } from '../../data/products'

export default function Location() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Quería consultar sobre los horarios de Villa Sur-Art.')}`

  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Visitanos
          </p>
          <h2 className={styles.title}>
            Dónde <em>encontrarnos</em>
          </h2>
          <p className={styles.desc}>
            Nuestra Galeria de Arte está ubicada en el corazón de Aguilares - Tucumán.
            Te esperamos para que conozcas nuestra colección en persona.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Dirección</p>
                <p className={styles.infoValue}>Gorriti 1142, Aguilares</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Horarios</p>
                <p className={styles.infoValue}>Lunes a Sábados · 10:00 – 19:00</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Contacto</p>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.infoValueLink}>
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mapCol}>
          <div className={styles.mapWrap}>
            <iframe
              title="Ubicación de Villa Sur-Art"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.154303032817!2d-65.6194491!3d-27.4333015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c489f0636fb5%3A0xa72ac4c6a2390068!2sVilla%20sur%20Art!5e0!3m2!1ses!2sar!4v1778538909459!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
