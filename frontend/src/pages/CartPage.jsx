import { React, useCallback, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../components/Loader"
import axios from "axios"

const CartPage = (props) => {
  const [qtyLoading, setQtyLoading] = useState(false)
  const [activeProduct, setActiveProduct] = useState({})
  const [paymentPopup, setpaymentPopup] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [payLoading, setPayloading] = useState(false)
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    const calcTotal = () => {
      let temp = JSON.parse(localStorage.cart).reduce((sum, obj) => {
        return sum + (obj.price || 0) * obj.quantity
      }, 0)
      setTotal(temp)
    }
    if (localStorage.cart) {
      calcTotal()
    }
  }, [total, qtyLoading])

  const handlePayment = async () => {
    setPayloading(true)
    await axios.post("http://localhost:8000/api/users/addToOrders", {
      userId: localStorage.userId,
      cart: JSON.parse(localStorage.cart),
    })
    localStorage.removeItem("cart")
    props.setCartCount(0)
    setPayloading(false)
    setOrderPlaced(true)
    navigate("/myorders")
  }
  const updateQuantity = useCallback(() => {
    const cart = JSON.parse(localStorage.cart)
    props.setCartCount(cart.length)
  }, [props])

  const addToCart = async (product) => {
    setActiveProduct(product)
    setQtyLoading(true)
    const response = await axios.post(
      "http://localhost:8000/api/users/addToCart",
      {
        userId: localStorage.userId,
        cart: product,
      }
    )
    localStorage.setItem("cart", JSON.stringify(response.data.cart))
    updateQuantity()
    setQtyLoading(false)
  }

  const removeFromCart = async (product) => {
    setQtyLoading(true)
    setActiveProduct(product)
    const response = await axios.post(
      "http://localhost:8000/api/users/removeFromCart",
      {
        userId: localStorage.userId,
        cart: product,
      }
    )
    localStorage.setItem("cart", JSON.stringify(response.data.cart))
    updateQuantity()
    setQtyLoading(false)
  }

  return props.cartCount ? (
    <section className='py-24 relative'>
      {paymentPopup ? (
        <div
          className='relative z-10'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='flex items-center justify-center'>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0'>
                      {payLoading ? (
                        <Loader h='24' w='24' />
                      ) : (
                        <h3
                          className='text-base font-semibold leading-6 text-gray-900'
                          id='modal-title'
                        >
                          {orderPlaced
                            ? "Order Placed Successfully"
                            : "Payment Simulation"}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 justify-center sm:flex sm:flex-row-reverse sm:px-6'>
                  <Link
                    to={orderPlaced ? "/myorders" : ""}
                    onClick={handlePayment}
                    className='inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                  >
                    {orderPlaced ? "Okay" : "Accept"}
                  </Link>
                  {orderPlaced ? (
                    ""
                  ) : (
                    <Link
                      onClick={() => setpaymentPopup(false)}
                      className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                    >
                      Decline
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
        <h2 className='title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black'>
          Shopping Cart
        </h2>
        <div className='hidden lg:grid grid-cols-2 py-6'>
          <div className='font-normal text-xl leading-8 text-gray-500'>Product</div>
          <p className='font-normal text-xl leading-8 text-gray-500 flex items-center justify-between'>
            <span className='w-full max-w-[200px] text-center'>
              Delivery Charge
            </span>
            <span className='w-full max-w-[260px] text-center'>Quantity</span>
            <span className='w-full max-w-[200px] text-center'>Total</span>
          </p>
        </div>
        {JSON.parse(localStorage.cart).map((product) => {
          return (
            <div key={product._id} className='grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6'>
              <div className='flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto'>
                <div className='img-box'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='xl:w-[140px]'
                  />
                </div>
                <div className='pro-data w-full max-w-sm '>
                  <h5 className='font-semibold text-xl leading-8 text-black max-[550px]:text-center'>
                    {product.name}
                  </h5>
                  <h6 className='font-medium text-lg leading-8 text-gray-600  max-[550px]:text-center'>
                    {"₹ " + product.price}
                  </h6>
                </div>
              </div>
              <div className='flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2'>
                <h6 className='font-manrope text-nowrap font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center'>
                  ₹ 15.00
                  <div className='text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap'>
                    (Delivery Charge)
                  </div>
                </h6>
                <div className='flex items-center w-full mx-auto justify-center'>
                  <button
                    disabled={qtyLoading ? true : false}
                    onClick={() => removeFromCart(product)}
                    className={`group ${
                      qtyLoading ? "cursor-not-allowed" : "active:bg-gray-500"
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
                  <div className='px-2 border-y text-nowrap border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent'>
                    {qtyLoading && product._id === activeProduct._id ? (
                      <Loader h='28' w='28' />
                    ) : (
                      product.quantity
                    )}
                  </div>
                  <button
                    disabled={qtyLoading ? true : false}
                    onClick={() => addToCart(product)}
                    className={`group ${
                      qtyLoading ? "cursor-not-allowed" : "active:bg-gray-500"
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
                <h6 className='text-gray-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center'>
                  {"₹ " +
                    Math.round(product.price * product.quantity + 15) +
                    ".00/-"}
                </h6>
              </div>
            </div>
          )
        })}
        <div className='bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto'>
          <div className='flex items-center justify-between w-full mb-6'>
            <p className='font-normal text-xl leading-8 text-gray-400'>Sub Total</p>
            <h6 className='font-semibold text-xl leading-8 text-gray-900'>
              {"₹ " + Math.round(total) + ".00/-"}
            </h6>
          </div>
          <div className='flex items-center justify-between w-full pb-6 border-b border-gray-200'>
            <p className='font-normal text-xl leading-8 text-gray-400'>
              Delivery Charge
            </p>
            <h6 className='font-semibold text-xl leading-8 text-gray-900'>
              {"₹ " + 15 * JSON.parse(localStorage.cart).length + ".00/-"}
            </h6>
          </div>
          <div className='flex items-center justify-between w-full py-6'>
            <p className='font-manrope font-medium text-2xl leading-9 text-gray-900'>
              Total
            </p>
            <h6 className='font-manrope font-medium text-2xl leading-9 text-gray-500'>
              {"₹ " +
                Math.round(total + 15 * JSON.parse(localStorage.cart).length) +
                ".00/-"}
            </h6>
          </div>
        </div>
        <div className='flex items-center flex-col sm:flex-row justify-center gap-3 mt-8'>
          <button
            onClick={() => setpaymentPopup(true)}
            className='rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-gray-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-gray-700'
          >
            Continue to Payment
            <svg
              className='ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='22'
              viewBox='0 0 23 22'
              fill='none'
            >
              <path
                d='M8.75324 5.49609L14.2535 10.9963L8.75 16.4998'
                stroke='white'
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  ) : (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <div className='h-1/2 w-1/2 md:h-1/4 md:w-1/4 flex justify-center items-center'>
          <img src='./images/empty-cart.png' alt='emptycart' className='' />
        </div>
        <div className='h-1/4 w-1/4 flex justify-center text-nowrap items-center m-5 text-red-500 font-semibold text-xl md:text-3xl'>
          YOUR CART IS EMPTY
        </div>
        <div className='p-3 flex justify-center text-sm md:text-md items-center font-semibold cursor-pointer rounded-md bg-gray-500 text-white'>
          <Link to='/'>SHOP NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
