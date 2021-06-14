import axios from "axios";

const server = process.env.API_HOST || "http://localhost:8000";
const apiKey = process.env.API_KEY;

const basePath = "/v1";
const resourcePath = "/resource";
const allPath = "/all";
// const idPath = "/id";
// const namePath = "/name";

const http = axios.create({
  headers: {
    "x-api-key": apiKey
  },
  baseURL: server,
  timeout: 1000
})


const model = {
  test(){
    console.log("testServerModel");
  },
  
  hashPassword(password) {
    var hash = 0;
    if (password.length === 0) return hash;
    for (var i = 0; i < password.length; i++) {
      var charVal = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + charVal;
      hash = hash & hash;
    }
    return hash.toString();
  },
  
  async getAllResources() {
    console.log("getAllResources");
    let res = await http({
      method: "get",
      url: basePath + resourcePath + allPath,
    });
    return res.data.data;
  }
};

export default model;