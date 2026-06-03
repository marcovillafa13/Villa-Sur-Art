import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import Location from './components/Location/Location'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <Cart />
    </CartProvider>
  )
}
