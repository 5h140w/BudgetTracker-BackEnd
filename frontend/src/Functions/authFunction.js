import jwt_decode from "jwt-decode";

export default getUserID = async () =>{
    console.log(jwt_decode(sessionStorage.getItem("token")))
}   