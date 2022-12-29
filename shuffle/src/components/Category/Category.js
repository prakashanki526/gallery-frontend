import React, {useEffect, useState} from 'react';
import styles from "./category.module.css";
import {getCategories} from "../../api/discover";
import {useNavigate, useParams} from "react-router-dom";


const Category = () => {
    const navigate = useNavigate();
    let {categoryName} = useParams();

    const [selected, setSelected] = useState();
    
    const [categoryList, setCategoryList] = useState([]);
    
    async function fetchCategories(){
        const categoryData = await getCategories();
        await setCategoryList(categoryData);
        
        if (!categoryName) {
            const defaultCategory = categoryList[0];
            const defaultCategoryName = defaultCategory.name;
            navigate(`/${defaultCategoryName}`);
            setSelected(defaultCategoryName);
        }
    }
    
    useEffect(()=>{
        fetchCategories();
    },[]);

    function navigateCategory(categoryName){
        setSelected(categoryName);
        navigate(`/${categoryName}`);
    }

    return (
        <>
        {categoryList.map((category,index)=>{
            return(
                <div key={index} onClick={()=>navigateCategory(category.name)} className={category.name===selected ?styles.selectedCat:styles.categories}>{category.name}</div>
            );
        })}
       
        </>
    );
};

export default Category;