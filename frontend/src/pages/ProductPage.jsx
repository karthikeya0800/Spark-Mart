import axios from "axios"
import { React, useCallback, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Rating from "../components/Rating"
import Loader from "../components/Loader"

const ProductPage = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [qtyLoading, setQtyLoading] = useState(false)
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(0)
  const { id } = useParams()

  const updateQuantity = useCallback(() => {
    if (!localStorage.cart) {
      return
    }
    const cart = JSON.parse(localStorage.cart)
    props.setCartCount(cart.length)
    const activeProduct = cart.find((obj) => obj._id === id)
    activeProduct ? setQty(activeProduct.quantity) : setQty(0)
  }, [id, props])

  useEffect(() => {
    window.scrollTo(0, 0)
    const getProduct = async () => {
      setIsLoading(true)
      const response = await axios.get(
        `https://spark-mart-backend.vercel.app/api/products/${id}`
      )
      updateQuantity()
      setProduct(response.data)
      setIsLoading(false)
    }
    getProduct()
  }, [id, updateQuantity])

  const addToCart = async () => {
    setQtyLoading(true)
    const response = await axios.post(
      "https://spark-mart-backend.vercel.app/api/users/addToCart",
      {
        userId: localStorage.userId,
        cart: product,
      }
    )
    localStorage.setItem("cart", JSON.stringify(response.data.cart))
    updateQuantity()
    setQtyLoading(false)
  }

  const removeFromCart = async () => {
    setQtyLoading(true)
    const response = await axios.post(
      "https://spark-mart-backend.vercel.app/api/users/removeFromCart",
      {
        userId: localStorage.userId,
        cart: product,
      }
    )
    localStorage.setItem("cart", JSON.stringify(response.data.cart))
    updateQuantity()
    setQtyLoading(false)
  }
  return (
    <div className='pt-20'>
      <span className='text-sm md:text-md ml-5 bg-gray-200 text-gray-600 font-bold p-2 rounded-lg'>
        <Link to='/'>Go Back</Link>
      </span>
      {isLoading ? (
        <div className='h-screen overflow-hidden flex justify-center items-center'>
          <Loader h='54' w='54' />
        </div>
      ) : (
        <div className='flex flex-wrap justify-center min-h-screen md:mx-20 mt-10'>
          <div className='md:w-1/2'>
            <div className='flex flex-wrap justify-center'>
              <div className='h-3/5 w-3/4 shadow-lg rounded-md mb-3'>
                <img
                  src={product.image}
                  alt='product-img'
                  className='w-full h-full rounded-md max-h-[500px] '
                />
              </div>
              <div className='h-2/5 w-3/4'>
                <div className='flex flex-wrap'>
                  <div className='text-nowrap'>
                    <span className='text-4xl md:text-3xl'>
                      ₹ {Math.ceil(product.price - product.price / 10)}.00
                    </span>
                    <div className='mt-1 line-through text-gray-500'>
                      ₹ {product.price}
                    </div>
                  </div>
                  <div className='my-2'>
                    <span className='text-sm md:text-md tracking-tighter ml-5 bg-gray-200 text-gray-600 font-bold p-1 rounded-lg'>
                      10%
                    </span>
                  </div>
                  <div className='mx-auto'>
                    <Rating rating={product.rating} />
                    <span className='text-xs font-semibold text-gray-500'>
                      {product.numReviews} Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-9/12'>
                <div className='text-2xl lg:text-5xl md:text-3xl font-bold my-2 text-gray-800'>
                  {product.name}
                </div>
                <div className='my-5 text-md md:text-lg text-gray-500'>
                  {product.description}
                </div>
                <div className='flex items-center w-full mx-auto justify-start'>
                  <button
                    disabled={
                      qty === 0 || qtyLoading || !localStorage.user
                        ? true
                        : false
                    }
                    onClick={removeFromCart}
                    className={`group ${
                      qty === 0 || qtyLoading || !localStorage.user
                        ? "cursor-not-allowed"
                        : "active:bg-gray-500"
                    }  rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50`}
                  >
                    <svg
                      className='stroke-gray-900 transition-all duration-500 group-hover:stroke-black'
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                    >
                      <path
                        d='M16.5 11H5.5'
                        stroke=''
                        strokeWidth='1.6'
                        strokeLinecap='round'
                      />
                      <path
                        d='M16.5 11H5.5'
                        stroke=''
                        strokeOpacity='0.2'
                        strokeWidth='1.6'
                        strokeLinecap='round'
                      />
                      <path
                        d='M16.5 11H5.5'
                        stroke=''
                        strokeOpacity='0.2'
                        strokeWidth='1.6'
                        strokeLinecap='round'
                      />
                    </svg>
                  </button>
                  <div className='border-y text-nowrap border-gray-200 outline-none text-gray-900 font-semibold text-sm w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[19px] text-center bg-transparent'>
                    {qtyLoading ? (
                      <Loader h='22' w='22' />
                    ) : (
                      <>{qty !== 0 ? qty : "Add to cart"}</>
                    )}
                  </div>
                  <button
                    disabled={qtyLoading || !localStorage.user ? true : false}
                    onClick={addToCart}
                    className={`group ${
                      !localStorage.user || qtyLoading
                        ? "cursor-not-allowed"
                        : "active:bg-gray-500"
                    } rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50`}
                  >
                    <svg
                      className='stroke-gray-900 transition-all duration-500 group-hover:stroke-black'
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                    >
                      <path
                        d='M11 5.5V16.5M16.5 11H5.5'
                        stroke=''
                        strokeWidth='1.6'
                        strokeLinecap='round'
                      />
                      <path
                        d='M11 5.5V16.5M16.5 11H5.5'
                        stroke=''
                        strokeOpacity='0.2'
                        strokeWidth='1.6'
                        strokeLinecap='round'
                      />
                      <path
                        d='M11 5.5V16.5M16.5 11H5.5'
                        stroke=''
                        strokeOpacity='0.2'
                        strokeWidth='1.6'
                        strokeLinecap='round'
                      />
                    </svg>
                  </button>
                </div>
                {localStorage.user ? (
                  <div className='p-3 h-10 my-2 w-40 flex justify-center text-sm md:text-md items-center font-semibold cursor-pointer rounded-md bg-gray-500 text-white'>
                    <Link to='/cart'>Continue..</Link>
                  </div>
                ) : (
                  <div>
                    <div className='text-sm text-red-500 font-semibold'>
                      *Login to add products to cart
                    </div>
                    <div className='p-3 h-10 my-2 w-40 flex justify-center text-sm md:text-md items-center font-semibold cursor-pointer rounded-md bg-gray-500 text-white'>
                      <Link to='/signin'>Login</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
