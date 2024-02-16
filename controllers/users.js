const {
   axiosGetUsers,
   axiosAddUser,
   axiosGetUserById,
} = require("../Api/userApi")

exports.getAllUsers = async (req, res) => {
   let Data = await axiosGetUsers()
   res.json(Data.data)
}

exports.addNewUser = async (req, res) => {
   let Data = await axiosAddUser(req.body)
   res.json(Data.data)
}

exports.getUserById = async (req, res) => {
   let Data = await axiosGetUserById(req.params.id)
   res.json(Data.data)
}
