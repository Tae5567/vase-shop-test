import { Router } from "express";
import {vase_list} from '../data';
import asyncHandler from "express-async-handler";
import {  Vase, VaseModel } from "../models/vase.model";
//import { HTTP_BAD_REUEST } from "../constants/status";

const vaseRoute = Router();


vaseRoute.get("/place", asyncHandler(
        async (req, res) => {
            const vasesCount = await VaseModel.countDocuments();
            //if data already exists in database, don't add again
            if(vasesCount > 0){
                res.send("Already placed!");
                return;
            } 
            await VaseModel.create(vase_list);
            res.send("Placed!");              
        }
    )
)


// Read - get all vases, HTTP GET
vaseRoute.get("/", asyncHandler(
    async (req, res) => {
        const vases = await VaseModel.find()
        res.send(vases);
    }
    )
)

//Create - Add Vase, HTTP POST
vaseRoute.post("/add", asyncHandler(
    async (req, res) => {
       // const newVase = new VaseModel(req.body);
       //const {name, price, description, imageUrl} = req.body;
        //try{
            //await newVase.save();
       // } catch(error){
           // res.status(500).send(error);
        //}

        const newVase: Vase ={
            id: '',
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }
        
        const dbVase = await VaseModel.create(newVase);
        res.send(dbVase);
    }
)
)

//Update - Edit Vase, HTTP PATCH or PUT
vaseRoute.put("/edit/:vaseID", asyncHandler(
    async (req, res) => {
        const editVase = await VaseModel.findByIdAndUpdate(req.params.vaseID, req.body);
        await editVase?.save();
        res.send(editVase);
        

    }
)
)



//get vase by search term, HTTP GET
vaseRoute.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        //use regex for search to keep search case insensitive
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const vases = await VaseModel.find({name: {$regex:searchRegex}})
        res.send(vases);
    }
)
)

//get by id, HTTP GET
vaseRoute.get("/:vaseID", asyncHandler (
    async (req, res) => {
        const vase = await VaseModel.findById(req.params.vaseID)
        res.send(vase);
    }
) )

//Delete- Delete Vase, HTTP DELETE
vaseRoute.delete("/:vaseID", asyncHandler(
    async (req, res) => {
        try{
            const vase = await VaseModel.findByIdAndDelete(req.params.vaseID);
            if(!vase) res.status(404).send("Product not found");
            res.status(200).send();
        } catch(error){
            res.status(500).send(error);
        }
    }
)
)

export default vaseRoute;


