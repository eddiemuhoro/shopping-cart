import React from 'react'

const Header = (props) => {
  return (
    <header className='block row center'>
        <div>
            <a href="#/">
                <h1>Shopping Cart</h1>
            </a>
        </div>
        <div>
            <a style={{marginRight:'20px'}} href="#/cart">
              Cart{' '}
              
              <span className='badge'>{props.cartItems.length}</span>
              </a>
            <a style={{marginLeft:'20px'}} href="#/login">Login</a>
        </div>
    </header>
  )
}

export default Header