import { Category } from "../model/Category";
//DTO => Data Transfer object
interface ICreateCategoryDTO {
    name:string,
    description: string
}


interface ICategoriesRepository {
    findByName(name: string): Category | undefined;
    findAll(): Category[];
    create({ name,  description }: ICreateCategoryDTO):void;
}

export { ICategoriesRepository, ICreateCategoryDTO };