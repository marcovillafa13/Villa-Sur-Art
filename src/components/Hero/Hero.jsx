import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Text content */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Casa · Museo · Taller — Tucumán
          </p>
          <h1 className={styles.title}>
            Arte que
            <br />
            <em>cuenta una</em>
            <br />
            historia única
          </h1>
          <p className={styles.subtitle}>
            Obras artísticas y piezas de grabado creadas con pasión. Cada
            obra transforma un espacio y evoca emociones que perduran.
          </p>
          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo("#galeria")}
            >
              Explorar galería
            </button>
            <button
              className={styles.btnGhost}
              onClick={() => scrollTo("#nosotros")}
            >
              Nuestra historia
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>+50</span>
              <span className={styles.statLabel}>obras disponibles</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>técnicas artísticas</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>+10</span>
              <span className={styles.statLabel}>años de trayectoria</span>
            </div>
          </div>
        </div>

        {/* Image panel */}
        <div className={styles.imagePanel}>
          <div className={styles.imageFeatured}>
            <img
              src="/Villa-Sur-Art/fotos/FormasDeUnTiempo.jpeg"
              alt="Al fin y al cabo — obra destacada"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Decorative element */}
          <div className={styles.decoBracket} aria-hidden="true">
            <span className={styles.decoLine} />
            <span className={styles.decoText}>Villa Sur-Art</span>
            <span className={styles.decoLine} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={() => scrollTo("#galeria")}
        aria-label="Ir a galería"
      >
        <span className={styles.scrollLabel}>Descubrir obras</span>
        <span className={styles.scrollArrow}>↓</span>
      </button>
    </section>
  );
}
