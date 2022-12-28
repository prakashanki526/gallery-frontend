import styles from "./filter.module.css";
import react, {useState} from "react";
import { useParams, useNavigate, createSearchParams } from "react-router-dom";

const Filter = () => {
    const [filter, setFilter] = useState({});
    const navigate = useNavigate();


    function onFilterChange(event){
        if(event.target.value === "asc" || event.target.value === "dsc"){
            navigate({
                search: createSearchParams({
                    sortByDate: event.target.value
                }).toString(),
            })
        } else {
            navigate({
                search: createSearchParams({
                    filterByLike: true
                }).toString(),
            })
        }
    }

    return (
        <div className={styles.container}>
            <select name="Filter" className={styles.options} onChange={onFilterChange}>
                <option value="" selected disabled>Filter</option>
                <option value="asc">Sort by Date(asc)</option>
                <option value="dsc">Sort by Date(dsc)</option>
                <option value="true">Favourites</option>
            </select>
        </div>
    );
};

export default Filter;