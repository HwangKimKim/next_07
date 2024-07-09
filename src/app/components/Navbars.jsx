
 'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import React, { useState } from 'react'
//import styles from './Navbars.css'
import { motion } from 'framer-motion'

const navMenus = [
    {
        title : 'Home',
        path : '/'
    },
    {
        title : 'Movies',
        path : '/movies'
    },
    {
        title : 'Board',
        path : '/board'
    }
]

const Navbars = () => {

  const [ open, setOpen ] = useState( false ); // open이 true인 때 나타남

  const user = false;   // login하면 menu보여주고,
  const isAdmin = false;  // 관리자아니어서 menu 안보여줌.
  // => side-bar click으로 menu나타남 

  const topVariants = {
    closed : { rotate: 0 },
    opened : { rotate : 45,
               backgroundColor: 'white'
            }
    
  }
  const centerVariants = {
    closed : { opacity: 1 },
    opened : { opacity : 0 },
  }
  const bottomVariants = {
    closed : { rotate: 0 },
    opened : { rotate : -45,
               backgroundColor: 'white'
              }
  }

  const listVariants = {
        closed : {
          x : '100vw'          // => 화면 밖으로...
         },
         opened : {
          x : '0',
          transition : {
            when : 'beforeChildren',        // => menu 4개. 이전 작업이 끝나면...
            staggerChildren : 0.3
          }
         }
  }
  const listItemVariants = {
        closed : {
          x : -10,
          opacity: 0
         },
         opened : {
          x : '0',
          opacity: 1
         }
  }

  return (
    <div className='flex justify-center p-9'>
      {/* <div className='hidden sm: block '> */}
      <div > 
          {
            navMenus.map( menu=> <Link href={ menu.path }  className='p-5'> { menu.title } </Link>)
          }

          {
            user ? (
              <>
                isAdmin && (
                  {
                    isAdmin && (
                      <NavLink item={{ title : 'Admin', path: 'admin'}} />
                    )
                  }   
                  {/*관리자인 때 나타나는 menu */}
                  <button>logout</button>
                )
              </>
            ) : ( <NavLink item={{ title : 'login', path: '/login'}} /> )
          }
      </div>
     


      <div className='sm:hidden'>
          <button  className='absolute right-4 top-4 flex flex-col gap-2.5 z-50' onClick={()=>setOpen(!open)}> 
            <motion.div className='w-10 h-1 bg-black rounded origin-left'
                  variants={ topVariants } animate={ open ? 'opened' : 'closed'}
            ></motion.div>  
            <motion.div className='w-10 h-1 bg-black rounded'
                  variants={ centerVariants } animate={ open ? 'opened' : 'closed'}
            ></motion.div>  
            <motion.div className='w-10 h-1 bg-black rounded origin-left' animate={ open ? 'opened' : 'closed'}
                  variants = { bottomVariants }
            ></motion.div>        
          </button>
          {
            open && <motion.div 
                        variants = { listVariants }   
                        initial='closed' 
                        animate='opened'
                        className='absolute top-0 left-0 w-full min-h-screen h-full bg-gray-600 flex flex-col 
                        justify-center items-center text-4xl gap-8'>
              {/*  align-items: center = items-center */}
              {
                  navMenus.map( menu=> < motion.div variants={ listItemVariants }
                              key={ menu.title }
                              style={{ color: 'white' }}
                  >
                    <Link href={ menu.path }> { menu.title } </Link>
                  </motion.div>)
              }
            </motion.div>
          }
      </div> 
    </div>
  )
}

export default Navbars


