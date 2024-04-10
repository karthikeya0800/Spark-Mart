import React from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import BannerSlides from "../components/BannerSlides"
import Card from "../components/Card"
import Loader from "../components/Loader"

const HomePage = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [products, setProducts] = useState([])
  const numSlides = 3
  const navigate = useNavigate()
  const getIdByName = async (name) => {
    const product = await axios.get(
      `https://spark-mart-backend.vercel.app/api/products/name/${name}`
    )
    const idByname = product.data[0]._id
    navigate(`product/${idByname}`)
  }

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      const response = await axios.post("https://spark-mart-backend.vercel.app/api/products", {
        pageNo: pageNo,
      })
      setProducts(response.data)
      setIsLoading(false)
    }
    getProducts()
  }, [pageNo])

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? numSlides - 1 : prevSlide - 1
    )
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === numSlides - 1 ? 0 : prevSlide + 1
    )
  }

  const goToPrevPage = () => {
    props.productsRef.current.scrollIntoView({
      behavior: "smooth",
    })
    setPageNo((prevPage) => prevPage - 1)
  }

  const goToNextPage = () => {
    props.productsRef.current.scrollIntoView({
      behavior: "smooth",
    })
    setPageNo((prevPage) => prevPage + 1)
  }

  return (
    <div className='bg-gradient-to-bl from-gray-500 to-gray-300' id='home'>
      {/* banner */}
      <div
        ref={props.homeRef}
        className='pt-20 relative h-full hidden md:block'
      >
        <div
          className='cursor-pointer absolute z-10 opacity-35 top-1/2 left-0 transform -translate-y-1/2 px-4 py-2'
          onClick={goToPrevSlide}
        >
          <img src='/images/banner-left.png' alt='left-arrow' />
        </div>
        <div className='overflow-hidden'>
          <BannerSlides getIdByName={getIdByName} currentSlide={currentSlide} />
        </div>
        <div
          className='cursor-pointer absolute z-10 opacity-35 top-1/2 right-0 transform -translate-y-1/2 px-4 py-2'
          onClick={goToNextSlide}
        >
          <img src='/images/banner-right.png' alt='right-arrow' />
        </div>
      </div>
      {/* banner */}

      {/* sale */}
      <div
        ref={props.saleRef}
        className='pt-20 flex justify-between p-5 border border-t-4'
      >
        <div className='m-auto'>
          <div className='font-semibold text-gray-900 text-sm md:text-lg'>
            10% off
          </div>
          <div className='uppercase text-gray-900 text-xl md:text-7xl font-bold my-3'>
            Flash Sale
          </div>
          <Link
            className='uppercase inline-block rounded-sm text-white bg-gray-800 tracking-wider px-2 py-2 text-sm md:text-lg md:px-4 md:mt-10 font-semibold'
            onClick={() => getIdByName("Acer Laptop")}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img
            className='h-36 w-44 md:h-full md:w-full'
            src='/images/sale-image.png'
            alt=''
          />
        </div>
      </div>
      {/* sale */}

      {/* services */}
      <div
        ref={props.servicesRef}
        className=' py-20 px-16 border border-t-4'
        id='services'
      >
        <div className='flex justify-center text-nowrap text-3xl font-bold text-gray-900 mb-10 uppercase'>
          Our Services
        </div>
        <div className='flex flex-wrap justify-between gap-5'>
          <div className='w-full md:w-1/3 lg:w-1/5'>
            <div className='uppercase mb-2 font-bold text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 inline-block mx-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
              Free Delivery
            </div>
            <div className='px-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eaque ea impedit.
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/5'>
            <div className='uppercase mb-2 font-bold text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 inline-block mx-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
                />
              </svg>
              Great Quality
            </div>
            <div className='px-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eaque ea impedit.
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/5'>
            <div className='uppercase mb-2 font-bold text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 inline-block mx-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 6h.008v.008H6V6Z'
                />
              </svg>
              Daily Offers
            </div>
            <div className='px-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eaque ea impedit.
            </div>
          </div>
          <div className='w-full md:w-1/3 lg:w-1/5'>
            <div className='uppercase mb-2 font-bold text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 inline-block mx-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                />
              </svg>
              Secure Payment
            </div>
            <div className='px-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              eaque ea impedit.
            </div>
          </div>
        </div>
      </div>
      {/* services */}

      {/* products */}
      <div ref={props.productsRef} className='pt-20 border border-t-4' id='products'>
        <div className='flex justify-center text-3xl font-bold text-gray-900 my-10 uppercase'>
          Latest Products
        </div>
        {isLoading ? (
          <Loader h='54' w='54' />
        ) : (
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 grid-flow-row'>
              {products.slice(0, 12).map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
        <div className='flex justify-end items-center mt-5 mr-5'>
          <button
            className={`rounded-full px-3 py-1 m-2 font-semibold text-white ${
              pageNo <= 1 ? "bg-gray-500" : "bg-black hover:bg-gray-700"
            }`}
            disabled={pageNo <= 1}
            onClick={goToPrevPage}
          >
            {"<< Prev"}
          </button>
          <span className='bg-white rounded-full px-3 font-semibold'>
            {pageNo}
          </span>
          <button
            className={`rounded-full px-3 py-1 m-2 font-semibold text-white ${
              products.length < 12
                ? "bg-gray-500"
                : "bg-black hover:bg-gray-700"
            }`}
            disabled={products.length < 12}
            onClick={goToNextPage}
          >
            {"Next >>"}
          </button>
        </div>
      </div>
      {/* products */}
    </div>
  )
}

export default HomePage
