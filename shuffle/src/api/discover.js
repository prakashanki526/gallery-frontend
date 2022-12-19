import axios from "axios";

export async function getCategories() {
    console.log("in");
    const reqUrl = `http://localhost:3000/discover/get-categories`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return (result.data);
    }
}