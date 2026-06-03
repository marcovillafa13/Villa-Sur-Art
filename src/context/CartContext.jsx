import { createContext, useContext, useReducer } from 'react'
import { WHATSAPP_NUMBER } from '../data/products'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find(i => i.id === action.product.id)
      if (exists) return state
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_OPEN':
      return { ...state, isOpen: !state.isOpen }
    case 'CLOSE':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const addItem = (product) => dispatch({ type: 'ADD', product })
  const removeItem = (id) => dispatch({ type: 'REMOVE', id })
  const toggleCart = () => dispatch({ type: 'TOGGLE_OPEN' })
  const closeCart = () => dispatch({ type: 'CLOSE' })

  const total = cart.items.reduce((acc, i) => acc + i.price, 0)

  const sendToWhatsApp = () => {
    if (cart.items.length === 0) return
    const lines = cart.items.map(
      i => `• ${i.name} (${i.dimensions}) — $${i.price.toLocaleString('es-AR')}`
    )
    const msg = [
      '¡Hola! Me interesa adquirir las siguientes obras de Villa Sur-Art:',
      '',
      ...lines,
      '',
      `*Total estimado (obras en ARS): $${total.toLocaleString('es-AR')}*`,
      '',
      '_Las obras en USD se cotizan al cambio del día._',
      '',
      '¿Podrían brindarme más información?',
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, toggleCart, closeCart, total, sendToWhatsApp }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
