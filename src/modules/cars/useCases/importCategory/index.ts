import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository =  CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const imporCategoryController = new  ImportCategoryController(importCategoryUseCase);

export { imporCategoryController }