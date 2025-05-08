const posts = require("../data/posts");
const express = require("express");
const router = express.Router();
const routerControllers = require("../controllers/controllers.posts");


router.get("/",(routerControllers.index));

router.get("/:id",(routerControllers.show));

router.delete("/:id",(routerControllers.destroy));

router.post("/",(routerControllers.store));

router.put("/:id",(routerControllers.update));


//console.log(posts);

// router.get("/:id",(req, res) =>{
    
//     const { id } = req.params;
//     res.send(`modifica tutto il dolce alla posizione ${id}`);

// });   

module.exports = router;