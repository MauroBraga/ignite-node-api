import {Router} from "express";
import { v4 as uuidV4} from "uuid";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoriesRoutes  = Router();
const categoriesRepository = new CategoriesRepository(); 

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if(categoryAlreadyExists){
        return res.status(400).json({error: "Category already exist1"});
    }
    categoriesRepository.create({name, description})
    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) =>{
    const lista = categoriesRepository.findAll();
    return res.json(lista);
})

export {categoriesRoutes}