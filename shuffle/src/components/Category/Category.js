import React, {useEffect, useState} from 'react';
import styles from "./category.module.css";
import {getCategories} from "../../api/discover";
import {useNavigate, useParams} from "react-router-dom";


const Category = () => {
    const navigate = useNavigate();
    let {categoryName} = useParams();

    const [categoryList, setCategoryList] = useState([]);
    
    async function fetchCategories(){
        const categoryData = await getCategories();
        setCategoryList(categoryData);

        if (!categoryName) {
            const defaultCategory = categoryList[0];
            const defaultCategoryName = defaultCategory.name;
            navigate(`/${defaultCategoryName}`);
        }
    }
    
    useEffect(()=>{
        fetchCategories();
    },[]);

    function navigateCategory(categoryName){
        navigate(`/${categoryName}`);
    }

    return (
        <>
        {categoryList.map((category,index)=>{
            return(
                <div key={index} onClick={()=>navigateCategory(category.name)} className={styles.categories}>{category.name}</div>
            );
        })}
       
        </>
    );
};

export default Category;