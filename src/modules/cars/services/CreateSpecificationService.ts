import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name:string,
    description:string
}
class CreateSpecificationService {

    constructor(private specificationReposytory:ISpecificationsRepository ){}
    execute({name, description}:IRequest) :void{
        const specificationAreadyExists  = this.specificationReposytory.findByName(name);

        if(specificationAreadyExists){
            throw new Error("Specification already exists!");
        }

        this.specificationReposytory.create({name, description});
    }

}

export { CreateSpecificationService }