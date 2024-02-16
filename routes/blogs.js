const express = require("express")
const router = express.Router()

const { Auth } = require("../middleware/auth")

const {
   getAllBlogs,
   addNewBlog,
   getBlogByUser,
   deleteBlog,
   modifyBlog,
} = require("../controllers/blogs")

router.route("/").get(getAllBlogs).post(Auth, addNewBlog)
router
   .route("/:id")
   .get(getBlogByUser)
   .delete(Auth, deleteBlog)
   .put(Auth, modifyBlog)

module.exports = router
