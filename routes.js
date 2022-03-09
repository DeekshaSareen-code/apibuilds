const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/",(req,res)=>{

    var obj = require("./data.json")
    var receipes = [];
    
    // console.log()
    for(var i = 0; i < obj.recipes.length; i++){
        receipes.push(obj.recipes[i].name);
    }
    return res.status(200).json({ recipeNames: receipes});
});

router.get("/details/:id", (req,res)=>{
  
    var obj = require("./data.json");
    const id = req.params.id;
    for(var i = 0; i<obj.recipes.length;i++){

        if(obj.recipes[i].name === id){
            console.log(obj.recipes[i].instructions.length)
            return res.status(200).json({details: ({ingredients: obj.recipes[i].ingredients, numSteps: obj.recipes[i].instructions.length})});
        }
    }
    return res.status(200).json({});
});

module.exports = router;