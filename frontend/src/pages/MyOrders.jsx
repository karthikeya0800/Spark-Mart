import axios from "axios"
import { React, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const myOrders = async () => {
      setLoading(true)
      const response = await axios.get(
        "https://spark-mart-backend.vercel.app/api/users/myorders/" + localStorage.userId
      )
      setOrders(response.data.orders.reverse())
      setLoading(false)
    }
    myOrders()
  }, [])
  return loading ? (
    <div className='min-h-screen flex justify-center'>
      <Loader h='54' w='54' />
    </div>
  ) : (
    <section className='py-24 min-h-screen relative'>
      <div className='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
        <h2 className='title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black'>
          My Orders
        </h2>
        {orders[0] ? (
          <div>
            <div className='hidden lg:grid grid-cols-2 py-6'>
              <div className='font-normal text-xl leading-8 text-gray-500'>
                Product
              </div>
              <p className='font-normal text-xl leading-8 text-gray-500 flex items-center justify-between'>
                <span className='w-full max-w-[200px] text-center'>Quantity</span>
                <span className='w-full max-w-[260px] text-center'>Ordered On</span>
                <span className='w-full max-w-[200px] text-center'>Total</span>
              </p>
            </div>
            {orders.map((product) => {
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
                      {product.quantity}
                      <div className='text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap'>
                        (Quantity)
                      </div>
                    </h6>
                    <div className='flex w-40 items-center mx-auto justify-center'>
                      {product.date}
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
          </div>
        ) : (
          <div className='flex justify-center h-screen'>
            <div className='flex flex-col items-center'>
              <div className='text-7xl'>☹️</div>
              <div className='flex justify-center text-nowrap items-center m-5 text-red-500 font-semibold text-xl md:text-3xl'>
                You haven't ordered anything yet
              </div>
              <div className='p-3 flex justify-center text-sm md:text-md items-center font-semibold cursor-pointer rounded-md bg-gray-500 text-white'>
                <Link to='/'>ORDER NOW</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MyOrders
