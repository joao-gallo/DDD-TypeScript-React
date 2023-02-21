import { Product } from "../entities/Product";
import { ProductRepository } from "../repository/ProductRepository";

class ProductService {

    constructor(private repository: ProductRepository) {}

    public registerProduct = async (entity: Omit<Product, "Codigo">): Promise<Product> => {
        if(!entity.CdgDeBarras || !entity.Descricao || !entity.PesoBruto || !entity.PesoLqd || entity.VlrDeVenda)
            throw new Error('Os campos não podem estar vazios.')

// Aqui faço Sanitização de Dados para evitar brechas no código
        if(entity.CdgDeBarras.length > 400) 
            throw new Error("Codigo De Barras muito grande");
        if(entity.Descricao.length < 20) 
            throw new Error("Descrição deve ser maior que 20 caracteres"); 
            return await this.repository.registerProduct(entity)
 }
}

export {ProductService}