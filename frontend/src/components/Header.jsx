import { useNavigate, Link } from "react-router-dom"

const Header = (props) => {
  const navigate = useNavigate()

  const handleClick = async (refer) => {
    await navigate("/")
    refer.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleChange = (e) => {
    if (e.target.value === "logout") {
      localStorage.clear()
      props.setCartCount(0)
      navigate("/")
    } else if (e.target.value === "myorders") {
      e.target.value = ""
      navigate("/myorders")
    }
  }
  return (
    <nav className='flex fixed z-20 py-4 items-center px-5 lg:px-24 md:px-10 shadow-md bg-gray-600 w-full'>
      <Link to='/' className='flex space-x-2 mr-auto'>
        <img
          src='/images/sparkmart-logo.svg'
          alt='logo'
          className='h-7 md:h-10 bg-gray-200 rounded-full'
        />
        <div className='font-bold text-lg md:text-2xl text-white text-nowrap tracking-tighter'>
          SparkMart
        </div>
      </Link>
      <div className='flex space-x-20'>
        <div className='hidden md:flex space-x-4'>
          <button
            className='text-gray-300 font-semibold text-md uppercase'
            onClick={() => handleClick(props.homeRef)}
          >
            Home
          </button>
          <button
            className='text-gray-300 font-semibold text-md uppercase'
            onClick={() => handleClick(props.saleRef)}
          >
            Sale
          </button>
          <button
            className='text-gray-300 font-semibold text-md uppercase'
            onClick={() => handleClick(props.servicesRef)}
          >
            Services
          </button>
          <button
            className='text-gray-300 font-semibold text-md uppercase'
            onClick={() => handleClick(props.productsRef)}
          >
            Products
          </button>
        </div>
        <div className='flex space-x-3'>
          <Link className='flex' to='/cart'>
            <img src='' alt='' />
            <div className='text-white font-semibold'>
              {props.cartCount ? "Cart(" + props.cartCount + ")" : "Cart"}
            </div>
          </Link>
          {localStorage.user ? (
            <select
              onChange={handleChange}
              className='text-white bg-gray-600 font-semibold border-none outline-none'
            >
              <option
                value=''
                defaultValue={""}
                hidden
                className='text-white bg-gray-600 font-semibold'
              >
                {localStorage.user}
              </option>
              <option
                value='myorders'
                className='text-white cursor-pointer bg-gray-600 font-semibold'
              >
                My Orders
              </option>
              <option
                value='logout'
                className='text-white cursor-pointer bg-gray-600 font-semibold'
              >
                Logout
              </option>
            </select>
          ) : (
            <Link className='flex' to='/signin'>
              <img src='' alt='' />
              <div className='text-white font-semibold'>Login</div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
