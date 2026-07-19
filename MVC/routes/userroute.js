// route ye defin karta hai ki request kiss function ya control tak jani chahiye
const express = require("express");
const router = express.Router();

const  {getusers,postusers, patchusers, putusers, deleteusers}  = require("../controllers/usercontroller");

router.get("/get",getusers);

router.post("/post",postusers)

router.patch("/patch/:id",patchusers)

router.put("/put/:id",putusers)

router.delete("/delete/:id",deleteusers)

module.exports = router;
