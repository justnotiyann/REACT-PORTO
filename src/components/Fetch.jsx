import axios from "axios";

export default fetchData = async () => {
    const api = "https://reqres.in/api/users";
    const result = await axios(api);
    console.log(result);
};
