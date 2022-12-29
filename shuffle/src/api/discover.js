import axios from "axios";

export async function getCategories() {
    const reqUrl = `https://photogallery-prakashankit.onrender.com/discover/get-categories`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return (result.data);
    }
}

export async function getImages(categoryName,sortByDate=null,filterByLike=null,shuffle){
    const reqUrl = `https://photogallery-prakashankit.onrender.com/discover/api?category=${categoryName}&sortByDate=${sortByDate}&filterByLike=${filterByLike}&shuffle=${shuffle}`;
    const result = await axios.get(reqUrl);
    if(result.data){
        return (result.data.galleryDetails);
    }
}

export async function toggleLike(reqId){
    const reqUrl = `https://photogallery-prakashankit.onrender.com/discover/like/${reqId}`;
    const result = await axios.post(reqUrl, reqId);
    if(result.data){
        return result.data;
    }
}