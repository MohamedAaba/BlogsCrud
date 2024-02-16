const {
   axiosGetBlogs,
   axiosAddBlog,
   axiosDeleteBlog,
   axiosGetBlogById,
   axiosModifyBlog,
} = require("../Api/blogApi")

const { helperGetBlogByUser } = require("../helper/helper")

exports.getAllBlogs = async (req, res) => {
   let Data = await axiosGetBlogs()
   res.status(200).json(Data.data)
}

exports.addNewBlog = async (req, res) => {
   req.body["userId"] = req.userID
   let data = await axiosAddBlog(req.body)
   res.json(data.data)
}

exports.getBlogByUser = async (req, res) => {
   let { data } = await axiosGetBlogs()
   let { id } = req.params
   res.json(helperGetBlogByUser(data, id))
}

exports.deleteBlog = async (req, res) => {
   let { id } = req.params
   let blog = await axiosGetBlogById(id)
   if (blog.data.userId == req.userID) {
      let deletedData = await axiosDeleteBlog(id)
      res.json("deleted")
   } else {
      res.json("You are not allowed to delete this blog")
   }
}

exports.modifyBlog = async (req, res) => {
   let { id } = req.params
   let blog = await axiosGetBlogById(id)
   if (blog.data.userId == req.userID) {
      let modifiedData = await axiosModifyBlog(id, req.body)
      res.json("modified :)")
   } else {
      res.json("You are not allowed to modify this blog")
   }
}
