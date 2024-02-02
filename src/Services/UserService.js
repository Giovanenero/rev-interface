import axios from "axios"

//const url = "http://localhost:8080";

const api = axios.create({
    baseURL: "http://localhost:8080/"
});

function createacontSerive(data, setMessagePopup){
    api.post("/createuser", data)
    .then((response) => {
        setMessagePopup({
            type: response.status === 201 ? "success" : "error",
            title: response.status === 201 ? "Sucesso!" : "Operação não realizada!",
            text: response.data
        });
    })
    .catch(error => {
        console.log(error)
        setMessagePopup({
            type: "error",
            title: "Operação não realizada!",
            text: error.response.data
        });
    });
}

function loginService(data){
    console.log(data);
}

export {
    createacontSerive,
    loginService
}