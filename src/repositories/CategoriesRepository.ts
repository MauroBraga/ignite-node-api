import { Category } from "../model/Category";

//DTO => Data Transfer object
interface ICreateCategoryDTO {
    name:string,
    description: string
}

class  CategoriesRepository {
     categories: Category[] ;

     constructor(){
         this.categories = [];
     }

     create({name, description}: ICreateCategoryDTO):void{
        const category : Category=  new Category();
        // category.name =  name;
        // category.description = description;
        // category.created_at = new Date() ;
        Object.assign(category, {
            name, 
            description,
            created_at: new Date()
        })
        this.categories.push(category);
     }


    findAll() : Category[]{
        return this.categories;
    }

    findByName(name:string):Category | undefined{
        const category  = this.categories.find(category => category.name === name);
        return category;
    }

}

export { CategoriesRepository }