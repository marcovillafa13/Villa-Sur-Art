import { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Galería', href: '#galeria' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart, toggleCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={e => handleNavClick(e, '#hero')}>
          <span className={styles.logoMark}>VSA</span>
          <span className={styles.logoText}>Villa Sur-Art</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={e => handleNavClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={toggleCart}
            aria-label={`Carrito, ${cart.items.length} obras`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cart.items.length > 0 && (
              <span className={styles.badge}>{cart.items.length}</span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={e => handleNavClick(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
