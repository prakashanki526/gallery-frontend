import styles from "./filter.module.css";

const Filter = () => {
    return (
        <div className={styles.container}>
            <select name="Filter" className={styles.options}>
                <option value="">Filter</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
};

export default Filter;