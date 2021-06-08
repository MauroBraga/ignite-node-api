import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const imporCategoryController = new  ImportCategoryController(importCategoryUseCase);

export { imporCategoryController }