exports.helperGetBlogByUser = (data, id) => {
   return data.filter(elem => elem.userId == id)
}
