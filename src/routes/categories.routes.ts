import {Router} from "express";
import { v4 as uuidV4} from "uuid";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoriesRoutes  = Router();
const categoriesRepository = new CategoriesRepository(); 
const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    categoriesRepository.create({name, description})
    return res.status(201);
})

export {categoriesRoutes}