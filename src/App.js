import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {

  const [product, setProduct] = useState([
    { id: 1, name: 'Smart TV LED 50', price: 1999.00 },
    { id: 2, name: 'PlayStation 5', price: 12000.00 },
    { id: 3, name: 'Notebook Acer Nitro 5', price: 5109.72 },
    { id: 4, name: 'Headset s fio Logitech G935', price: 1359.00 },
    { id: 5, name: 'Tablet Samsung Galaxy Tab S7', price: 4844.05 },
    { id: 6, name: 'Cadeira Gamer Cruiser Preta FORTREK', price: 1215.16 },
  ]);

  const [searchProduct, setSearchProduct] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [productCart, setProductCart] = useState([]);
  const [inCart, setInCart] = useState(false);


  const randomProduct = () => {

    const number = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const findProduct = product.find(product => product.id === number)
    const percentageDiscount = Math.floor(Math.random() * (90 - 40 + 1)) + 40
    const valueDiscount = (findProduct.price * (percentageDiscount / 100)).toFixed(2)
    const actualPrice = (findProduct.price - valueDiscount).toFixed(2)

    const newList = {
        name: findProduct.name,
        price: findProduct.price,
        percentageDiscount: percentageDiscount,
        valueDiscount: valueDiscount,
        actualPrice: actualPrice,
    }

    setSearchProduct([newList])
    setShowResult(true)
  }



  const addCart = (productId) => {

    const cart = searchProduct.find(product => product.id === productId);

    setProductCart([...productCart, cart])
    setInCart(true)
  }

  return (
    <div className="App">
      <header className="App-header">

        <Button randomProduct={randomProduct} />

        {showResult && <Product searchProduct={searchProduct} addCart={addCart} /> }

        {inCart && <Cart productCart={productCart} />}
        
      </header>
    </div>
  );
}

export default App;
