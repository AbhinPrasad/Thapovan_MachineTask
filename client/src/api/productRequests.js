import axios from "axios"

const API = axios.create({baseURL:"http://localhost:5000"})

export const addProduct = (formdata)=>{
    const result = API.post("/add-product",formdata)
}