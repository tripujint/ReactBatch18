import axios from "axios"
import config from "../Config/config"

const All = async()=>{
    try {
        const result = await axios.get(`${config.domain}/api/country`)
        console.log(result);
        return result.data
    } catch (error) {
        return await error.message
    }
}
const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/api/country/list`)
        console.log(result);
        return result.data
    } catch (error) {
        return await error.message
    }
}
const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/api/country/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/api/country`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const Update = async(payload)=>{
    try {
        const result = await axios.put(`${config.domain}/api/country/${payload.countryId}`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/api/country/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
export default {All,list,Delete,Create,Update,FindOne}