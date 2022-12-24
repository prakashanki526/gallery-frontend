// eslint-disable-next-line
import styles from "./gallerycard.module.css";
import {useState, useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import { getImages } from "../../api/discover";

const GalleryCard = () => {
    const [imageDataList, setImageDataList] = useState([[]]);
    const {categoryName} = useParams();
    let sortByDate;
    let filterByLike;

    const queryParams = new URLSearchParams(window.location.search);
    const queryStringDate = queryParams.get("sortByDate");
    const queryStringLike = queryParams.get("filterByLike");

    if (queryStringDate) sortByDate = queryStringDate;
    else if (queryStringLike) filterByLike = true;

    async function fetchImages(categoryName,sortByDate,filterByLike){
        const imageList = await getImages(categoryName,sortByDate,filterByLike);
        setImageDataList(imageList);
    }

    useEffect(()=>{
        fetchImages(categoryName,sortByDate,filterByLike);
    },[categoryName,sortByDate,filterByLike]);

    return (
        <>
        {console.log(imageDataList)}
        {imageDataList.length && imageDataList.map((imageData,index)=>
         <div key={index} className={styles.imagecard}>
                <div className={styles.image}>
                    <img src={imageData.imageUrl} alt="can't reload"></img>
                </div>
                <div className={styles.imageinfo}>
                    <div>
                        <i class='far fa-heart' style={{fontSize: 26}}></i>
                    </div>
                    <div>
                        {imageData.name}
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default GalleryCard;