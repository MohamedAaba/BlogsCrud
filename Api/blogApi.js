const axios = require("axios")
require("dotenv").config()

const Api = axios.create({
   baseURL: process.env.BLOGURL,
   timeout: 5000,
   headers: { "Content-Type": "application/json" },
})

exports.axiosGetBlogs = () => {
   return Api.get(`/`)
}

exports.axiosGetBlogById = id => {
   return Api.get(`/${id}`)
}

exports.axiosAddBlog = infos => {
   return Api.post("/", infos)
}

exports.axiosDeleteBlog = id => {
   return Api.delete(`/${id}`)
}

exports.axiosModifyBlog = (id, data) => {
   return Api.patch(`/${id}`, data)
}
