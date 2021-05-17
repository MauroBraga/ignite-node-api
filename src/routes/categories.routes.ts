import {Router} from "express";
import { v4 as uuidV4} from "uuid";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryservice";


const categoriesRoutes  = Router();
const categoriesRepository = new CategoriesRepository(); 

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({name, description});
    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) =>{
    const lista = categoriesRepository.findAll();
    return res.json(lista);
})

export {categoriesRoutes}