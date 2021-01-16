import axios from "axios";

// const server = process.env.API_HOST;
const server = "http://localhost:8000";
const apiKey = process.env.API_KEY;

const basePath = "/v1";
const resourcePath = "/resource";
const allPath = "/all";
// const idPath = "/id";
// const namePath = "/name";


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
    try {
      let res = await axios({
        method: "get",
        url: server + basePath + resourcePath + allPath,
        headers: {
          "x-api-key": apiKey
        }
      });
      return {
        resources: res.data.data, 
        ok: true
      };
    } catch (err) {
      console.error("Error fetching: "+ err);
      return {
        ok: false
      };
    }
  }
};

export default model;