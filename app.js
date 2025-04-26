import axios from "axios";
const URL = "https://futuramaapi.com/api/characters/1";

/* fetch(URL)
    .then((response) => {
        if (!response.ok){
            throw new Error("error en la peticion");
        }
        return response.json();
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

*/

axios.get(URL)
.then(respuesta => {
    console.log(respuesta.data);
}).catch(error =>{
    console.log(error);
})