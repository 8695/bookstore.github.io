import styles from "../css/showdetail.module.css";
import crossLogo from "../images/x.png";

const Showdeatil = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className={styles.overlay}>
      <div className={styles.inner}>
        <button className={styles.close} onClick={onClose}>
          <img src={crossLogo} alt="cross" className={styles.cross} />
        </button>
        <div className={styles.innerbox}>
          <img src={thumbnail} alt="" />
          <div className={styles.info}>
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors}</h3>
            <h4>
              {item.volumeInfo.publisher}
              <span>{item.volumeInfo.publishedDate}</span>
            </h4>
            <br />
            <a href={item.volumeInfo.previewLink}>
              <button className={styles.btn}>More</button>
            </a>
          </div>
        </div>
        <h4 className={styles.description}>{item.volumeInfo.description}</h4>
      </div>
    </div>
  );
};

export default Showdeatil;
