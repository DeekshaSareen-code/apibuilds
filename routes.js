const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("",(req,res)=>{

    return res.status(200).json({ message:"Users Retrieved", success:"true", users: users});
});

module.exports = router;