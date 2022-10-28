import axios from "axios"
import config from "../Config/config"

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/api/region`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/api/region/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/api/region/`,payload)
        console.log(payload);
        return result
    } catch (error) {
        return await error.message
    }
}
const Update = async(payload)=>{
    try {
        const result = await axios.put(`${config.domain}/api/region/${payload.regionId}`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/api/region/${id}`)
        return result.data 
    } catch (error) {
        return await error.message
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {list,Delete,Create,Update,FindOne}