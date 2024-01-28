import axios from "axios"
import { getUser, storeUser } from "../utils/local_storage";
import { server_url } from "../utils/endpoint";



  export const addWork = async (data) => {
    try {
      const formData = new FormData();
      console.log(data.file)
      formData.append('file', data.file); 
      delete data.file;
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const user = getUser()
      const response = await axios.post(`${server_url}/user_profession/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
        },
      });
     
     return response.data
    } catch (error) { 
      console.log(error.response)
      throw error
    }
  };

  
  export const addWorkAttachment = async (uuid,data) => {
    try {
      const formData = new FormData();
      console.log(data.file)
      formData.append('file', data.file); 
      delete data.file;
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const user = getUser()
      const response = await axios.post(`${server_url}/user_profession_attachment/${uuid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
        },
      });
     
     return response.data
    } catch (error) { 
      console.log(error.response)
      throw error
    }
  };
  
  export const updateUserWork = async (uuid,data) => {
    try {
      const formData = new FormData();
      console.log(data.file)
      formData.append('file', data.file); 
      delete data.file;
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const user = getUser()
      const response = await axios.patch(`${server_url}/user_profession/${uuid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
        },
      });
     
     return response.data
    } catch (error) { 
      console.log(error.response)
      throw error
    }
  };


  export const getUserWorks = async (page,limit) => {
    try {
      const user = getUser()
      const response = await axios.get(`${server_url}/user_profession/user/?page=${page}&limit=${limit}`,{
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
          },
      });
      console.log(response.data.body)
     return response.data.body
    } catch (error) {
      console.log(error);
      throw error
    }
  };

  export const deleteUserWorks = async (uuid) => {
    try {
      const user = getUser()
      const response = await axios.delete(`${server_url}/user_profession/${uuid}`,{
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
          },
      });
     return response.data.body
    } catch (error) {
      console.log(error);
      throw error
    }
  };

  export const getAllWorks = async (page,limit) => {
    try {
        const user = getUser()
      const response = await axios.get(`${server_url}/user_profession/?page=${page}&limit=${limit}`,{
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
          },
      });
     return response.data.body
    } catch (error) {
      console.log(error);
      throw error
    }
  };
  
  export const getWorkDetails = async (uuid) => {
    try {
        const user = getUser()
      const response = await axios.get(`${server_url}/user_profession/${uuid}`,{
        headers: {
            'Content-Type': 'multipart/form-data', 
            'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
          },
      });
     return response.data.body
    } catch (error) {
      console.log(error);
      throw error
    }
  };
 
 

export const login = async(data)=>{
    try {
     const response = await axios.post(`${server_url}/user/login`,data)
    //  alert(response.data.tokens)
    storeUser(response.data.tokens)
     return response.data
    } catch (error) {
      console.log(error)
      return error.response.data;
    }
 }

 
 export const resetPassword = async(data)=>{
  try {
   const response = await axios.post(`${server_url}/user/reset-password`,data)
   return response.data;
  } catch (error) {
    return error.response.data;
  }
}
export const newPassword = async(data,uuid)=>{
  try {
   const response = await axios.patch(`${server_url}/user/password/${uuid}`,data)
  //  console.log(response.data.response)
   return response.data
  } catch (error) {
    return error.response.data;
  }
}

 export const getUserInfo = async(uuid)=>{
  try {
    console.log(headers)
   const response = await axios.get(`${server_url}/user/${uuid}`,{
    headers
   })
   console.log(response.data)
    return response.data.body
  } catch (error) {
    throw error
  }
}
export const getMyInfo = async()=>{
  try {
    const user = getUser()
   const response = await axios.get(`${server_url}/user/me`,{
      headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user && user.ACCESS_TOKEN}`
        }
   })
 
    return response.data.body
  } catch (error) {
   console.log(error)
  }
}

 export const getAllUsers = async(limit,page)=>{
  try {
   
   const response = await axios.get(`${server_url}/user/?page=${page}&limit=${limit}`,{
    headers
   })
   console.log(response.data)
    return response.data.body
  } catch (error) {
   console.log(error)
  }
}

export const getInvestors = async(limit,page)=>{
  try {
   
   const response = await axios.get(`${server_url}/user/investors/?page=${page}&limit=${limit}`,{
    headers
   })
   console.log(response.data)
    return response.data.body
  } catch (error) {
   console.log(error)
  }
}

export const getEnterprenuers = async(limit,page)=>{
  try {
   
   const response = await axios.get(`${server_url}/user/enterprenuers/?page=${page}&limit=${limit}`,{
    headers
   })
   console.log(response.data)
    return response.data.body
  } catch (error) {
   console.log(error)
  }
}

export const getAdmins = async(limit,page)=>{
  try {
   
   const response = await axios.get(`${server_url}/user/admins/?page=${page}&limit=${limit}`,{
    headers
   })
   console.log(response.data)
    return response.data.body
  } catch (error) {
   console.log(error)
  }
}

export const getReviewers = async(limit,page)=>{
  try {
   
   const response = await axios.get(`${server_url}/user/reviewers/?page=${page}&limit=${limit}`,{
    headers
   })
   console.log(response.data)
    return response.data.body
  } catch (error) {
   console.log(error)
  }
}

 