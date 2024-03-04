import cart from "../images/carts.png";
import styles from "../css/navbar.module.css";
import { useState } from "react";

const Navbar=()=>{
    const [count,setCount]=useState(0);


    return(
        <nav className={styles.Nav}>
         
            <h1 className={styles.title}>Book Store</h1>
          
          <div className={styles.cartContainer}>
            
            <img  src={cart} alt="Cart" className={styles.cartIcon}/>
            <span className={styles.cartCount}>{count}</span>
          </div>
        </nav>
    )
      
    
}
export default Navbar;