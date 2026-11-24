import React from 'react'

const Header = () => {
  return (
    <div className='flex  items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold'>World</span> </h1>
      <button className='bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Logout
      </button>
    </div>
  )
}

export default Header
