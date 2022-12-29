// eslint-disable-next-line
import styles from "./gallerycard.module.css";
import {useState, useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import { getImages, toggleLike } from "../../api/discover";

const GalleryCard = () => {
    const [imageDataList, setImageDataList] = useState([]);
    const {categoryName} = useParams();
    let sortByDate;
    let filterByLike;
    let shuffle;

    const [like, setLike] = useState(0);

    const queryParams = new URLSearchParams(window.location.search);
    const queryStringDate = queryParams.get("sortByDate");
    const queryStringLike = queryParams.get("filterByLike");
    const queryStringShuffle = queryParams.get("shuffle");

    if(queryStringShuffle) shuffle = queryStringShuffle;

    if (queryStringDate) sortByDate = queryStringDate;
    else if (queryStringLike) filterByLike = true;

    async function fetchImages(categoryName,sortByDate,filterByLike,shuffle){
        const imageList = await getImages(categoryName,sortByDate,filterByLike,shuffle);
        setImageDataList(imageList);
    }

    useEffect(()=>{
        fetchImages(categoryName,sortByDate,filterByLike,shuffle);
    },[categoryName,sortByDate,filterByLike,shuffle,like]);

    async function handleClick(imageId){
        setLike(!like);
        // console.log(like);
        await toggleLike(imageId);
    }

    return (
        <>
        {imageDataList.length && imageDataList.map((imageData,index)=>
         <div key={index} className={styles.imagecard}>
                <div className={styles.image}>
                    <img src={imageData.imageUrl} alt="can't reload"></img>
                </div>
                <div className={styles.imageinfo}>
                    <div onClick={()=>handleClick(imageData._id)}>
                        <i class='fa fa-heart' value={imageData._id} style={{fontSize: 26, color: imageData.likes?"red":"grey"}}></i>
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