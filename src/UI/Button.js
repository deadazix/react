import styles from './Button.module.css'
const Button = (probs)=>{
    return <button className={styles.button} type={probs.type}>{probs.children}</button>
}

export default Button