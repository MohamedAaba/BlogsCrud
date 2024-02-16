const express = require("express")
const router = express.Router()

const { getAllUsers, addNewUser, getUserById } = require("../controllers/users")

router.route("/").get(getAllUsers).post(addNewUser)
router.route("/:id").get(getUserById)

module.exports = router
