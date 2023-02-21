import { Product } from "../entities/Product";
import { IProductPersistence } from "./IProductPersistence";

class ProductRepository {

    constructor(private iPersistence: IProductPersistence) {}

    public registerProduct = async (entity: Omit<Product, "Codigo">): Promise<Product> => {
        return await this.iPersistence.registerProduct(entity)
    }
}
export {ProductRepository}