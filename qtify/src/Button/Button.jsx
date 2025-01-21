import styles from "./Button.module.css";
function Button({textValue, onClick}){
    return (
      <button className={styles.button} onClick={onClick}>{textValue}</button>  
    );
}
export default Button;