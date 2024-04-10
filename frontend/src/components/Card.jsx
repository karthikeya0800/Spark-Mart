import React from "react"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const Card = (props) => {
  return (
    <Link
      key={props.product._id}
      to={"/product/" + props.product._id}
      className='h-[450px] w-80 border border-gray-400 rounded-lg shadow-lg'
    >
      <div className='h-1/2 w-3/4 mx-auto mt-5 rounded-md bg-white'>
        <img
          src={props.product.image}
          alt='product img'
          className='h-full rounded-md'
        />
      </div>
      <div className='flex h-1/2 justify-center items-center'>
        <div className='p-2'>
          <div className='font-semibold tracking-wide text-center'>
            {props.product.name}
          </div>
          <div className='text-center font-extrabold text-lg m-2'>
            {"₹ " + props.product.price + ".00/-"}
          </div>
          <div className='flex justify-center gap-2 p-2'>
            <Rating rating={props.product.rating} />
            <span className='text-xs font-semibold text-gray-500'>
              {props.product.numReviews} Reviews
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
