const router=require("express").Router();
const hollywood=require("../dummydata/hollywood")
router.route("/hollywood").get(hollywood)
module.exports=router;