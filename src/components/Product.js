import React from 'react'

const Product = (props) => {
    const {product, onAdd}= props;
  return (
    <div className='row-item'>
        <img className='small' src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div>
            <button onClick={()=> onAdd(product)} >Add to cart</button>
        </div>
    </div>
  )
}

export default Product