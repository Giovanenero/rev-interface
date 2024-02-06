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

async function loginService(data){
    return await api.post("/login", data)
    .then((response) => {
        return response;
    });
}

async function verifyUserService(data){
    return await api.post("/verifyuser", data)
    .then((response) => {
        return response;
    });
}

const UserService = {
    createacontSerive,
    loginService,
    verifyUserService
}

export default UserService;