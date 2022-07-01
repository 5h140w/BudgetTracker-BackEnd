import jwt_decode from "jwt-decode";

export const getUserID = ()=>{
    return jwt_decode(sessionStorage.getItem("token")).user_id
}   