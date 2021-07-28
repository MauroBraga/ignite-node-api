import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUserCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUserCase
);

export { listCategoriesController };
