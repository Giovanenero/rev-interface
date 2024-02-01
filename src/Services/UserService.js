import axios from "axios"

//const url = "http://localhost:8080";

const api = axios.create({
    baseURL: "http://localhost:8080/"
});

function createacontSerive(data){
    api.post("/createuser", data)
    .then((response) => {
        console.log(response.data)
    })
    .catch(error => console.log("Erro na solicitação: ", error));
}

function loginService(data){
    console.log(data);
}

export {
    createacontSerive,
    loginService
}