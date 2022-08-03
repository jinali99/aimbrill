import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
      <div className='header'>
          <nav>
              <ul>
                  <li>
                      <NavLink to='/'>Product List</NavLink>
                  </li>

                  <li>
                      <NavLink to='/addpro'>Add Product</NavLink>
                  </li>

                  <li>
                      <NavLink to='/edit'>Edit Product</NavLink>
                  </li>

                  <li>
                      <NavLink to='/buynow'>Buy Now</NavLink>
                  </li>

                  <li>
                      <NavLink to='/addtocart'>Add Cart</NavLink>
                  </li>

                  

              </ul>
          </nav>

    </div>
  )
}

export default Header