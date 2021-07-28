import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
