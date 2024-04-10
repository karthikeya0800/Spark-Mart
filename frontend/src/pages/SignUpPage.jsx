import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader"
const SignUpPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  const registerFunction = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios
      .post("https://spark-mart-backend.vercel.app/api/users/register", {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((resp) => {
        setMessage(resp.data.message)
      })
      .catch((err) => {
        console.log(err)
        setMessage(err.response.data.message)
      })
  }
  return (
    <div>
      {message ? (
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
                      <h3
                        className='text-base font-semibold leading-6 text-gray-900'
                        id='modal-title'
                      >
                        {message}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 justify-center sm:flex sm:flex-row-reverse sm:px-6'>
                  {message.toLowerCase().includes("Registered Successfully") ? (
                    <Link
                      to='/signin'
                      className='inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                    >
                      Login
                    </Link>
                  ) : (
                    ""
                  )}
                  {message.toLowerCase().includes("registered successfully") ? (
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto'
                      onClick={() => {
                        setMessage("")
                        navigate("/signin")
                      }}
                    >
                      Okay
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                      onClick={() => {
                        setMessage("")
                        setIsLoading(false)
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <div className='h-screen overflow-hidden flex justify-center items-center'>
          <Loader h='54' w='54' />
        </div>
      ) : (
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 pt-20 h-screen'>
          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <img
              className='mx-auto h-28 w-auto'
              src='/images/sparkmart-logo.svg'
              alt='Logo'
            />
            <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Register
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={registerFunction}>
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  Username
                </label>
                <div className='mt-2'>
                  <input
                    id='username'
                    name='username'
                    type='username'
                    onChange={handleUsername}
                    value={username}
                    required
                    className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label className='block text-sm font-medium leading-6 text-gray-900'>
                    Password
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    onChange={handlePassword}
                    value={password}
                    required
                    className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label className='block text-sm font-medium leading-6 text-gray-900'>
                    Confirm Password
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='confirmpassword'
                    name='confirmpassword'
                    type='password'
                    onChange={handleConfirmPassword}
                    value={confirmPassword}
                    required
                    className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
              Already have an account ?
              <Link
                to='/signin'
                className='font-semibold leading-6 text-gray-600 hover:text-gray-500'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUpPage
