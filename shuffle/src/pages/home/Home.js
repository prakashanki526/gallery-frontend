import Category from "../../components/Category/Category";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </div>
    );
};

export default Home;