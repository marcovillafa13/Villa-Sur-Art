import { useState, useEffect } from 'react'
import { products, categories } from '../../data/products'
import { useCart } from '../../context/CartContext'
import styles from './Gallery.module.css'

// ── Lightbox ──────────────────────────────────────────────
function Lightbox({ product, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const { cart, addItem, removeItem } = useCart()
  const inCart = cart.items.some(i => i.id === product.id)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div className={styles.lbBackdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label={`Vista ampliada de ${product.name}`}>

      {hasPrev && (
        <button className={`${styles.lbArrow} ${styles.lbArrowLeft}`} onClick={e => { e.stopPropagation(); onPrev() }} aria-label="Anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      {hasNext && (
        <button className={`${styles.lbArrow} ${styles.lbArrowRight}`} onClick={e => { e.stopPropagation(); onNext() }} aria-label="Siguiente">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}

      <div className={styles.lbPanel} onClick={e => e.stopPropagation()}>

        <div className={styles.lbImageWrap}>
          {product.image
            ? <img src={product.image} alt={product.name} className={styles.lbImage} />
            : <div className={styles.lbPlaceholder} />
          }
        </div>

        <div className={styles.lbInfo}>
          <div className={styles.lbMeta}>
            <span className={styles.lbCategory}>{product.category}</span>
            <span className={styles.lbDimensions}>{product.dimensions}</span>
          </div>
          <h2 className={styles.lbName}>{product.name}</h2>
          <p className={styles.lbArtist}>{product.artist}</p>
          {product.description && (
            <p className={styles.lbDescription}>{product.description}</p>
          )}
          <p className={styles.lbPrice}>
            {product.currency === 'USD' ? 'USD ' : '$'}{product.price.toLocaleString('es-AR')}
          </p>
          <button
            className={`${styles.lbAddBtn} ${inCart ? styles.lbAddBtnDone : ''}`}
            onClick={() => inCart ? removeItem(product.id) : addItem(product)}
          >
            {inCart ? '✓ Agregado al carrito' : '+ Agregar al carrito'}
          </button>
        </div>

        <button className={styles.lbClose} onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

      </div>
    </div>
  )
}

// ── ProductCard ───────────────────────────────────────────
function ProductCard({ product, onOpen }) {
  const { cart, addItem, removeItem } = useCart()
  const inCart = cart.items.some(i => i.id === product.id)

  return (
    <article className={styles.card}>
      <div
        className={styles.cardImageWrap}
        onClick={() => onOpen(product)}
        role="button"
        tabIndex={0}
        aria-label={`Ver ${product.name} en detalle`}
        onKeyDown={e => e.key === 'Enter' && onOpen(product)}
      >
        <div className={styles.cardImage}>
          {product.image
            ? <img src={product.image} alt={product.name} loading="lazy" />
            : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderInner} />
              </div>
            )
          }
        </div>
        <div className={styles.cardOverlay}>
          <span className={styles.zoomHint}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Ver obra
          </span>
          <button
            className={`${styles.addBtn} ${inCart ? styles.addBtnDone : ''}`}
            onClick={e => { e.stopPropagation(); inCart ? removeItem(product.id) : addItem(product) }}
            aria-label={inCart ? 'Quitar del carrito' : `Agregar ${product.name} al carrito`}
          >
            {inCart ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardMeta}>
          <span className={styles.cardCategory}>{product.category}</span>
          <span className={styles.cardDimensions}>{product.dimensions}</span>
        </div>
        <h3 className={styles.cardName}>{product.name}</h3>
        <p className={styles.cardArtist}>{product.artist}</p>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>
            {product.currency === 'USD' ? 'USD ' : '$'}{product.price.toLocaleString('es-AR')}
          </span>
          <button
            className={`${styles.cardAddMobile} ${inCart ? styles.cardAddMobileDone : ''}`}
            onClick={() => inCart ? removeItem(product.id) : addItem(product)}
            aria-label={inCart ? 'Quitar del carrito' : 'Agregar al carrito'}
          >
            {inCart ? 'En carrito ✓' : 'Agregar'}
          </button>
        </div>
      </div>
    </article>
  )
}

// ── Gallery ───────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [showAll, setShowAll] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  const visible = showAll ? filtered : filtered.slice(0, 6)

  const openLightbox = (product) => {
    const idx = products.findIndex(p => p.id === product.id)
    setLightboxIndex(idx)
  }

  const goNext = () => setLightboxIndex(i => i < products.length - 1 ? i + 1 : i)
  const goPrev = () => setLightboxIndex(i => i > 0 ? i - 1 : i)

  const lightboxProduct = lightboxIndex !== null ? products[lightboxIndex] : null

  return (
    <section className={styles.section} id="galeria">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Colección
            </p>
            <h2 className={styles.title}>
              Nuestras <em>obras</em>
            </h2>
          </div>
          <p className={styles.headerDesc}>
            Cada pieza es única. Exploralás, elegí la que te habla y consultanos
            por WhatsApp para más información.
          </p>
        </header>

        <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => { setActiveCategory(cat); setShowAll(false) }}
              aria-pressed={activeCategory === cat}
            >
              {cat}
              {cat !== 'Todos' && (
                <span className={styles.filterCount}>
                  {products.filter(p => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map(product => (
            <ProductCard key={product.id} product={product} onOpen={openLightbox} />
          ))}
        </div>

        {!showAll && filtered.length > 6 && (
          <div className={styles.showMore}>
            <button className={styles.showMoreBtn} onClick={() => setShowAll(true)}>
              Ver todas las obras
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </button>
          </div>
        )}

        {showAll && filtered.length > 6 && (
          <div className={styles.showMore}>
            <button className={styles.showMoreBtn} onClick={() => { setShowAll(false); document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' }) }}>
              Ocultar todas las obras
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {lightboxProduct && (
        <Lightbox
          product={lightboxProduct}
          onClose={() => setLightboxIndex(null)}
          onNext={goNext}
          onPrev={goPrev}
          hasNext={lightboxIndex < products.length - 1}
          hasPrev={lightboxIndex > 0}
        />
      )}
    </section>
  )
}