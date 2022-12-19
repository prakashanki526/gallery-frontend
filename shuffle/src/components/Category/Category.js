import React, {useEffect, useState} from 'react';
import styles from "./category.module.css";
import {getCategories} from "../../api/discover";


const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    
    async function fetchCategories(){
        const categoryData = await getCategories();
        setCategoryList(categoryData);
    }
    
    useEffect(()=>{
        fetchCategories();
    },[]);

    return (
        <>
        {categoryList.map((category,index)=>{
            return(
                <div className={styles.categories}>{category.name}</div>
            );
        })}
       
        </>
    );
};

export default Category;