
import './App.css';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const {products}= data;
  const [cartItems, setCartItems]= useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item )=> item.id === product.id);
    if(exist){
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item));
    }else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((item )=> item.id === product.id);
    if(exist.quantity ===1 ){
      //remove item from cart
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(cartItems.map((item) => 
      item.id === product.id ? {...exist, quantity: exist.quantity - 1} : item));
    }
  }
  return (
    <div className="App">

     <Header const cartItems={cartItems} />
     <div className='row'>
       <Main onAdd={onAdd} products={products} />
       <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
     </div>
    </div>
  );
}

export default App;
