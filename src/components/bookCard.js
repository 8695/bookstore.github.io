import { useState } from "react";
import Showdeatil from "./showdetail";
import styles from "../css/bookcard.module.css" 

const Card = ({ bookData }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);
    // Initialize with null

    function showDetail(){
       setShow(!show)
    }

    return (
        <>
            {bookData.map((item) => {
                // Destructure the necessary properties from item.volumeInfo and item.saleInfo
                const { imageLinks, title } = item.volumeInfo;
                const thumbnail = imageLinks && imageLinks.smallThumbnail;
                const amount = item.saleInfo && item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <div className={styles.card} key={item.id} onClick={() => {setItem(item); }}>
                            <img src={thumbnail} alt="" className={styles.img}/>
                            <div className={styles.bottom}>
                                <h3 className={styles.title}>{title}</h3>
                                <div className={styles.priceContainer}>
                                <p className={styles.amount}>&#8377;{amount}</p>
                                <button className={styles.btn} onClick={showDetail}>More Info</button>
                                </div>
                            </div>
                         
                        </div>
                    );
                } 
                    else {
                        return null; // Skip rendering if thumbnail or amount is undefined
                      }
                
            })}
            {show && <Showdeatil show={show} item={bookItem} onClose={() => setShow(false)} />}
        
        </>
    );
};

export default Card;
