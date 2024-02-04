import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/"
});

async function createacontSerive(data){
    return await api.post("/createuser", data)
    .then((response) => {
        return response;
    });
}

function loginService(data){
    console.log(data);
}

const UserService = {
    createacontSerive,
    loginService
}

export default UserService;