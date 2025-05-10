import { error } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item
const addFood = async (req,res)=> {
      
    let image_filename = `${req.file.filenmae}`

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,messege:"Food Added"})
    } catch (error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood}