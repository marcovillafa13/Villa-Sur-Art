import styles from "./About.module.css";

const values = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    label: "Pasión",
    desc: "Cada obra nace de una profunda vocación artística",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    label: "Identidad",
    desc: "Arte arraigado en la cultura y paisaje del norte argentino",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "Comunidad",
    desc: "Un espacio abierto donde el arte conecta a las personas",
  },
];

export default function About() {
  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageMain}>
            <img
              src="/Villa-Sur-Art/fotos/seriesvino_1.jpeg"
              alt="Taller"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={styles.imageAccent}>
            <img
              src="/Villa-Sur-Art/fotos/fotochica.png"
              alt="Villa Sur-Art taller"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={styles.yearBadge}>
            <span className={styles.yearNum}>+30</span>
            <span className={styles.yearLabel}>años de arte</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Nuestra historia
          </p>
          <h2 className={styles.title}>
            Un espacio donde
            <br />
            <em>el arte vive</em>
          </h2>
          <p className={styles.body}>
            En Villa Sur-Art, nuestra Casa-Museo-Taller nos apasiona el arte en
            todas sus formas. Presentamos una exquisita colección de cuadros
            artísticos y piezas de grabado que sumergen al visitante en un mundo
            de creatividad y belleza.
          </p>
          <p className={styles.body}>
            Entendemos que el arte es una expresión personal y una forma de
            crear un ambiente único en tu espacio. Por eso, ofrecemos
            asesoramiento personalizado para ayudarte a encontrar la pieza
            perfecta que se ajuste a tu estilo.
          </p>

          <div className={styles.values}>
            {values.map((v) => (
              <div key={v.label} className={styles.valueItem}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div>
                  <p className={styles.valueLabel}>{v.label}</p>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
