const express = require("express");
const router = express.Router();
router.use(express.json());

const obj = require("./data.json");
router.get("/",(req,res)=>{

    var receipes = [];
    
    // console.log()
    for(var i = 0; i < obj.recipes.length; i++){
        receipes.push(obj.recipes[i].name);
    }
    return res.status(200).json({ recipeNames: receipes});
});

router.get("/details/:id", (req,res)=>{
  
    const id = req.params.id;
    for(var i = 0; i<obj.recipes.length;i++){

        if(obj.recipes[i].name === id){
            console.log(obj.recipes[i].instructions.length)
            return res.status(200).json({details: ({ingredients: obj.recipes[i].ingredients, numSteps: obj.recipes[i].instructions.length})});
        }
    }
    return res.status(200).json({});
});

router.post("/", (req,res)=> {

    var body = req.body;
    for(var i = 0; i<obj.recipes.length;i++){
        if(obj.recipes[i].name === body.name){
            return res.status(400).json({error: "Recipe Already Exists"});
        }
    }
    obj["recipes"].push(body);
    return res.status(201).json({});
});

router.put("/",(req,res)=>{

    var body = req.body;
    for(var i = 0; i<obj.recipes.length;i++){

        if(obj.recipes[i].name === body.name){
            if(body.ingredients){
                obj.recipes[i].ingredients = body.ingredients;
                
            }
            if(body.instructions){
                obj.recipes[i].instructions = body.instructions;
            }
            return res.status(204).json();
        }
    }
    return res.status(404).json({ error: "Recipe does not exist" });

});
module.exports = router;