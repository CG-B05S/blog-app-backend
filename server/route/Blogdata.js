const express = require ('express');
const detailsControler1 = require('../Component/Blogdata');
const detailsRouter1 =express.Router();

detailsRouter1.route('/blogdata')
.get(detailsControler1.blogprojectapi)


module.exports=detailsRouter1;