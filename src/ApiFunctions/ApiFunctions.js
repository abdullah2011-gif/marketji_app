
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
  // console.log('auth')
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
async addingFavorites(itemId,cusId){
  // console.log('auth')
   try {
     const response = await axios.post(`${config.url}customer/favotites/${itemId}/${cusId}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
async deleteFavorite(itemId,cusId){
  // console.log('auth')
   try {
     const response = await axios.delete(`${config.url}customer/favotites/${itemId}/${cusId}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
async addingCart(itemId,cusId){
  // console.log('auth')
   try {
     const response = await axios.post(`${config.url}customer/cart/${itemId}/${cusId}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
async deleteCart(itemId,cusId){
  // console.log('auth')
   try {
     const response = await axios.delete(`${config.url}customer/cart/${itemId}/${cusId}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
async getFavorites(cusId){
  // console.log('auth')
   try {
     const response = await axios.get(`${config.url}customer/favotites/get/${cusId}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
async getcart(cusId){
  // console.log('auth')
   try {
     const response = await axios.get(`${config.url}customer/cart/get/${cusId}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return []
   } catch (error) {
    return []
   }
}
async addCards(body){
  // console.log('auth')
   try {
     const response = await axios.put(`${config.url}customer/payment`,body)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return null
   } catch (error) {
     console.log(JSON.stringify(error.response.data))
    return null
   }
}
async requestOrder(body){
  // console.log('auth')
   try {
     const response = await axios.post(`${config.url}customer/place/order`,body)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return null
   } catch (error) {
     console.log(JSON.stringify(error.response.data))
    return null
   }
}
async getOrders(id){
  // console.log('auth')
   try {
     const response = await axios.get(`${config.url}customer/get/order/${id}`)
    //  console.log(response)
     if(response.status==200)
       return response.data
       else return {pendingOrder:[],orders:[]}
   } catch (error) {
     console.log(JSON.stringify(error.response.data))
    return {pendingOrder:[],orders:[]}
   }
}
}