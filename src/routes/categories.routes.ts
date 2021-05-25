import {Router} from "express";
import { CategoriesRepository } from    "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";


const categoriesRoutes  = Router();
const categoriesRepository = new CategoriesRepository(); 

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (req, res) =>{
    const lista = categoriesRepository.findAll();
    return res.json(lista);
})

export {categoriesRoutes}