import axios from "axios"
import { getUser, storeUser } from "../utils/local_storage";
import { server_url } from "../utils/endpoint";
import {headers} from "../utils/headers"


export const addCategory = async (data) => {
    
    try { 
      const response = await axios.post(`${server_url}/category`, data,{
        headers
      });
     return response.data
    } catch (error) { 
      console.log(error)
      return error.response.data;
    }
  };
  export const getCategories = async () => {
    try {
        console.log(headers)
      const response = await axios.get(`${server_url}/category/`,{
        headers
      });
      console.log(response.data.body)
      return response.data.body
    } catch (error) {

      console.log(error);
      throw error
    }
  };

  
  

  export const deleteUser = async (uuid) => {
    try {
      const response = await axios.delete(`${server_url}/user/${uuid}`,{
        headers
      });
     return response.data.status
    } catch (error) {
      console.log(error);
    }
  };
 

