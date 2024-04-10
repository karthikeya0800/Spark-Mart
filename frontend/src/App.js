import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import ProductPage from "./pages/ProductPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SignUpPage from "./pages/SignUpPage"
import CartPage from "./pages/CartPage"
import MyOrders from "./pages/MyOrders"

const App = () => {
  const homeRef = useRef(null)
  const saleRef = useRef(null)
  const servicesRef = useRef(null)
  const productsRef = useRef(null)

  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    if (localStorage.cart) {
      setCartCount(JSON.parse(localStorage.cart).length)
    }
  }, [])

  return (
    <BrowserRouter>
      <Header
        homeRef={homeRef}
        saleRef={saleRef}
        servicesRef={servicesRef}
        productsRef={productsRef}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              homeRef={homeRef}
              saleRef={saleRef}
              servicesRef={servicesRef}
              productsRef={productsRef}
            />
          }
        />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route
          path='/cart'
          element={
            <CartPage cartCount={cartCount} setCartCount={setCartCount} />
          }
        />
        <Route
          path='/product/:id'
          element={<ProductPage setCartCount={setCartCount} />}
        />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
