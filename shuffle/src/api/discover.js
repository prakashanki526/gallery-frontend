import axios from "axios";

export async function getCategories() {
    const reqUrl = `http://localhost:3001/dicover/get-categories`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return result.data;
    }
}