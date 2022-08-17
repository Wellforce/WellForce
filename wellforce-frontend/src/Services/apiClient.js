import axios from "axios";
 class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }
  removeToken() {
    console.log("in apiclient remove token")
    localStorage.removeItem(this.tokenName);
  }
  
 async request({ endpoint, method = `GET`, data = {} }) {
  console.log("data in apiclient", data)
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };
     if (!this.token){
      this.token = localStorage.getItem(this.tokenName)


     }
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    console.log("headers",headers)
    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message };
    }
  }
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }
  async postPreferences(checkedArray) {
    console.log("checked array in apiclient", checkedArray)
    return await this.request({
      endpoint: `preference`,
      method: `POST`,
      data: checkedArray,
    });
  }
  async UpdatePreferences(checkedArray) {
    console.log("checked array in update apiclient", checkedArray)
    return await this.request({
      endpoint: `preference`,
      method: `PUT`,
      data: checkedArray,
    });
  }
  async deleteLike(likedObj){
    console.log("Deleted like ",likedObj)
    return await this.request({
      endpoint: `likes`,
      method: `DELETE`,
      data:likedObj,
    },  console.log("delete like"));
  }
  async updateLike(newStatus,liked_id){
    if(newStatus){
      const  {data,error  } = this.createLike({"liked_id":liked_id})
      
      return data?true:false
    }
    else{
      const  {data,error  } =   this.deleteLike({"liked_id":liked_id})
    
      return data?true:false
    }
   
  }
  async createLike(likedObj){
    console.log("created new like: ",likedObj)
    return await this.request({
      endpoint: `likes`,
      method: `POST`,
      data: likedObj,
    },console.log("create like") );
  }

  async checkIfPrefExists(){
    return await this.request({
      endpoint: `preference/prefCheck`,
      method: `GET`,
    })

  }
  async checkIfLikeExists(liked_id){
    console.log("liked id in check:",liked_id)

    return await this.request({
      endpoint: `likes/checkLiked/${liked_id}`,
      method: `GET`,
      
  },console.log("in api client check if like exist"))
  }
  
  async superMatch(liked_id){
    console.log("liked id in check:",liked_id)

    return await this.request({
      endpoint: `likes/super/${liked_id}`,
      method: `GET`,
      
  },console.log("in api client check if superlike exist"))
  }

}
export default new ApiClient( "http://localhost:3001"); 
