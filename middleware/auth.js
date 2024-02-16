const { axiosGetUsers } = require("../Api/userApi")

exports.Auth = async (req, res, next) => {
   let { u, p } = req.query
   let { data } = await axiosGetUsers()
   let filtered = data.filter(elem => elem.name == u && elem.password == p)
   if (filtered.length) {
      req.userID = filtered[0].id
      next()
   } else {
      res.json("username or password wrong :/")
   }
}
