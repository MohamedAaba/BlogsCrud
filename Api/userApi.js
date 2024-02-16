const axios = require("axios")
require("dotenv").config()

const Api = axios.create({
   baseURL: process.env.USERURL,
   timeout: 5000,
   headers: { "Content-Type": "application/json" },
})

exports.axiosGetUsers = () => {
   return Api.get(`/`)
}

exports.axiosAddUser = infos => {
   return Api.post(`/`, infos)
}
