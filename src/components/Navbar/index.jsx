import styles from "./navbar.module.scss"

const Navbar = () => {
    return <div className={styles.container}>
        <p>home</p>
        <p>about</p>
        <p>contacto</p>
    </div>;
};

export default Navbar;