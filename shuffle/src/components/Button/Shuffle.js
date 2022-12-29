import styles from "./shuffle.module.css";
import {useNavigate} from "react-router-dom";

const Shuffle = () => {
    const navigate = useNavigate();

    function doShuffle(){
        navigate(`?shuffle=4`);
    }

    return (
        <button className={styles.container} onClick={doShuffle}>
            Shuffle
        </button>
    );
};

export default Shuffle;