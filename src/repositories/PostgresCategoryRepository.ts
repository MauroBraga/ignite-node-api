import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesrepository";



class PostgresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): Category | undefined{
        console.log(name)
        return new Category();
    }
    findAll(): Category[] {
       return [];
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesRepository}