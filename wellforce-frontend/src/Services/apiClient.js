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

 async request({ endpoint, method = `GET`, data = {} }) {
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

  async checkIfPrefExists(){
    return await this.request({
      endpoint: `preference/prefCheck`,
      method: `GET`,
    })

  }

 async updatePref(){}
}
export default new ApiClient( "http://localhost:3001"); 
