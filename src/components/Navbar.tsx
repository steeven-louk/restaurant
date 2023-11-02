import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import CartIcon from './CartIcon'

const Navbar = () => {
  const user = true;
  return (
    <div  className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
      </div>
      
      <div className='text-xl md:font-bold flex-1 md:text-center'>
      {/* LOGO */}
        <Link href={"/"}>Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className='md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" height={20} width={20} alt="" />
          <span>123 472 58</span>
        </div>
        {user ?
     <Link href="/login">Login</Link>
     :
     <Link href="/orders">Orders</Link>
 }
 <CartIcon />
      </div>
    </div>
  )
}

export default Navbar