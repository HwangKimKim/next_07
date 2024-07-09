import React from 'react'
import Link from 'next/link'

// { title: 'Admin', path: 'admin'}

const NavLink = ( {item }) => {
  return (
   <Link href= { item.path }> { item.title } </Link> 
   
  )
}

export default NavLink


