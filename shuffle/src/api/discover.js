import axios from "axios";

export async function getCategories() {
    const reqUrl = `https://photogallery-prakashankit.onrender.com/discover/get-categories`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return (result.data);
    }
}

export async function getImages(categoryName,sortByDate,filterByLike){
    const reqUrl = `https://photogallery-prakashankit.onrender.com/discover/api?category=nature`;
    const result = await axios.get(reqUrl);
    if(result.data){
        console.log(result.data[0]);
        return (result.data);
    }
}