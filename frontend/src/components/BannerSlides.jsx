import { Link } from "react-router-dom"

const BannerSlides = (props) => {
  return (
    <div
      className='flex transition-transform duration-500 ease-in-out'
      style={{ transform: `translateX(-${props.currentSlide * 100}%)` }}
    >
      <div className='flex w-full flex-shrink-0 px-40 z-0'>
        <div className='my-auto w-1/2'>
          <p className='text-4xl text-gray-900 font-semibold tracking-wider'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Link
            className='inline-block uppercase text-white font-semibold tracking-wider px-5 py-2 my-5 bg-gray-800 rounded-sm'
            onClick={() => props.getIdByName("Smart Watch")}
          >
            Shop Product
          </Link>
        </div>
        <div className='w-1/2 m-auto'>
          <img src='/images/banner-image1.png' alt='banner-image1' />
        </div>
      </div>
      <div className='flex w-full flex-shrink-0 px-40 z-0'>
        <div className='my-auto w-1/2'>
          <p className='text-4xl text-gray-900 font-semibold tracking-wider'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Link
            className='inline-block uppercase text-white font-semibold tracking-wider px-5 py-2 my-5 bg-gray-800 rounded-sm'
            onClick={() => props.getIdByName("Home Security Camera")}
          >
            Shop Product
          </Link>
        </div>
        <div className='w-1/2 m-auto'>
          <img src='/images/banner-image2.png' alt='banner-image2' />
        </div>
      </div>
      <div className='flex w-full flex-shrink-0 px-40 z-0'>
        <div className='my-auto w-1/2'>
          <p className='text-4xl text-gray-900 font-semibold tracking-wider'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <Link
            className='inline-block uppercase text-white font-semibold tracking-wider px-5 py-2 my-5 bg-gray-800 rounded-sm'
            onClick={() => props.getIdByName("JBL Wireless Headphones")}
          >
            Shop Product
          </Link>
        </div>
        <div className='w-1/2 m-auto'>
          <img src='/images/banner-image3.png' alt='banner-image3' />
        </div>
      </div>
    </div>
  )
}

export default BannerSlides
