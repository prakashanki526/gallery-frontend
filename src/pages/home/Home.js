import Category from "../../components/Category/Category";
import styles from "./Home.module.css";
import Shuffle from "../../components/Button/Shuffle";
import Filter from "../../components/Filter/Filter";
import GalleryCard from "../../components/GalleryCard/GalleryCard";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.nav1}>
                    <div className={styles.nav}>
                        <Category />
                    </div>
                    <div>
                        <Filter />
                    </div>
                </div>
                <GalleryCard />
            </div>
            <Shuffle />
        </div>
    );
};

export default Home;