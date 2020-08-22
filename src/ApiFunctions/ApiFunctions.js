
import axios from 'axios'
import config from '../../config'
export default class Apimanager{

async Login(auth){
  // console.log(auth)
   try {
     const response = await axios.post(`${config.url}login`,auth)
    //  console.log(response)
     if(response.status==200)
       return response
       else return response.data.message
   } catch (error) {
     console.log(error.response.data)
    return error.response.data
   }
}
async signUp(auth){
  // console.log(auth)
   try {
     const response = await axios.post(`${config.url}signup`,auth)
    //  console.log(response)
     if(response.status==200||response.status==200)
       return response
       else return response.data.message
   } catch (error) {
     console.log(error)
    return error.response.data
   }
}
async sentOtp(auth){
  console.log(config.url)
   try {
     const response = await axios.post(`${config.url}auth`,auth)
    //  console.log(response)
    
       return response
       
   } catch (error) {
     console.log(error)
   }
}
async getCatAndProducts(){
  // console.log(auth)
   try {
     const response = await axios.get(`${config.url}customer/getitems`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
}