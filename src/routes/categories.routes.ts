import {Router} from "express";
import { v4 as uuidV4} from "uuid";
import { Category } from "../model/Category";

const categoriesRoutes  = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const category : Category=  new Category();
    // category.name =  name;
    // category.description = description;
    // category.created_at = new Date() ;
    Object.assign(category, {
        name, 
        description,
        created_at: new Date()
    })
    categories.push(category);
    return res.status(201).json({category});
})

export {categoriesRoutes}