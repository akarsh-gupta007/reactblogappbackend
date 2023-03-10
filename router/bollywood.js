const router=require("express").Router();
const bollywood=require("../dummydata/bollywood")
router.route("/bollywood").get(bollywood.apiController)
module.exports=router;