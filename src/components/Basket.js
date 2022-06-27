import React from 'react'

const Basket = (props) => {
    const {cartItems, onAdd, onRemove}= props;
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxPrice = itemsPrice * 0.08;
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className='block col-1'>
        <h2>Basket</h2>
        
    <div>
        {cartItems.length ===0 && <p>Your basket is empty</p>}
    </div>
    {cartItems.map((item)=>(
        <div key={item.id} className='row'>
             
            <h3 className='col-2'>{item.name}</h3>
            <div className='col-2 btns'>
              <button onClick={()=> onAdd(item)} className='add' >
                +
                </button>
              <button onClick={()=> onRemove(item)} className='remove' >
                -
                </button>
            </div>
            <div className='col-2 text-right'>
              {item.quantity}* ${item.price.toFixed(2)}
            </div>
        </div>
    ))}
    {cartItems.length !==0 && (
        <>
         <hr></hr>
         <div className='row cart'>
            
              <p className='col-2 head'>Items Price</p>
              <p className='col-1 text-right'>${itemsPrice.toFixed(2)}</p>
          </div>
          <div className='row cart'>
              <p className='col-2 head'>Tax</p>
              <p className='col-1 text-right'>${taxPrice.toFixed(2)}</p>
          </div>
          <div className='row'>
              <p className='col-2 head'>Shipping</p>
              <p className='col-1 text-right'>${shippingPrice.toFixed(2)}</p>
          </div>
          <hr></hr>
          <div className='row'>
              <p className='col-2 head'>Total</p>
              <p className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></p>
            <button onClick={()=> alert('Impement checkout')} style={{width:'100%'}}>Proceed to payment</button>


         </div>
        </>
    )}
    </aside>
    
  )
}

export default Basket