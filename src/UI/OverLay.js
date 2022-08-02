import styles from "./OverLay.module.css";

const OverLay = (probs) => {
    const onClickHandler = e=>{
     
        if(e.target.classList.contains('OverLay_overlay__p9OoJ')){
            
            probs.close()
        }
    }
  return (
    <div className={styles.overlay} onClick={onClickHandler}>
      <div className={styles.container}>
        <div className={styles.top}>Invalid!</div>
        <div className={styles.error}>{probs.children}</div>
      </div>
    </div>
  );
};

export default OverLay;
