import styles from "./filter.module.css";
// import React,{useState} from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const Filter = () => {
    // const [filter, setFilter] = useState({});
    const navigate = useNavigate();


    function onFilterChange(event){
        if(event.target.value === "asc" || event.target.value === "dsc"){
            // setFilter({sortByDate: event.target.value});
            navigate({
                search: createSearchParams({
                    sortByDate: event.target.value
                }).toString(),
            })
        } else {
            // setFilter({filterByLike: true});
            navigate({
                search: createSearchParams({
                    filterByLike: true
                }).toString(),
            })
        }
    }

    function handleClear(e) {
        e.setState({selected:"Filter"});
      }

    return (
        <div className={styles.container}>
            <select name="Filter" className={styles.options} onChange={onFilterChange}>
                <option value="" selected disabled>Filter</option>
                <option value="asc">Sort by Date(asc)</option>
                <option value="dsc">Sort by Date(dsc)</option>
                <option value="true">Filter by like</option>
            </select>
        </div>
    );
};

export default Filter;