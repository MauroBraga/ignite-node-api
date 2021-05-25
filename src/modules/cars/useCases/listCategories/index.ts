import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUserCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new  ListCategoriesController(listCategoriesUserCase);

export {listCategoriesController}