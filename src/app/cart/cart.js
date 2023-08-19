// components/Cart.js
import styles from './Page.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Cart = ({ cartItems, removeFromCart, quantity }) => {
  let sum = 0;
  const getTotalItems = () => {
    for(var i in quantity){
      sum = sum + quantity[i];
      // console.log({i})
    }
    return sum;
  }
  const getTotalAmount = () => cartItems.reduce((total, item, index) => total + item.price * quantity[index], 0);

  return (
    <div className='py-10'>
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <p className={styles.head}>Your Cart</p>
        <span className={styles.totalItems}>Total Items: {getTotalItems()}</span>
      </div>
      <div className={styles.cartItems}>
        {cartItems.map((item, index) => (
          <div className={styles.cartItem} key={index}>
            <Image src={"/bag2.png"} alt={item.name} width={100} height={100}/>
            <div>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {quantity[index]}</p>
              <p>Subtotal: ${(item.price * quantity[index]).toFixed(2)}</p>
            </div>
            {/* <button className={styles.deleteBtn} onClick={() => removeFromCart(index)}>Delete</button> */}
          </div>
        ))}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalAmount}>
          Total: <span className={styles.amount}>${getTotalAmount()}</span>
        </div>
        <Link href={"/checkout/"} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" >Buy</Link>
        <button className={"mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"}>+ Container</button>


      </div>
    </div>
    </div>
  );
};

export default Cart;
