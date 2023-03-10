import styles from "./button.module.scss"

const button = (props) => {
    return <button className={styles.btn}>{props.texto}</button>
}

export default button