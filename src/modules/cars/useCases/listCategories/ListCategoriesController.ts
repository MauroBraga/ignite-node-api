import { Request, Response } from  "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {

    constructor(private listCategoriesUserCase: ListCategoriesUseCase){}

    handle(request: Request, response: Response):Response{
        const lista = this.listCategoriesUserCase.execute();
        return response.json(lista);
    }
}

export { ListCategoriesController }