import { NextFunction, Request, Response } from "express";
import { Product } from "../domain/entities/Product";
import { ProductService } from "../domain/useCase/ProductService";

class ProductController {
    constructor(private ProductUseCase: ProductService) {}

    public registerProduct = async (req: Request, res: Response, next: NextFunction) => {
        const product: Omit<Product, "Codigo"> = {
            Descricao: req.body.Descricao,
            CdgDeBarras: req.body.CdgDeBarras,
            VlrDeVenda: req.body.VlrDeVenda,
            PesoBruto: req.body.PesoBruto,
            PesoLqd: req.body.PesoLqd
        }
        try {
            const result = await this.ProductUseCase.registerProduct(product)
            return res.status(201).json(result);
        } catch (error) {
            next(error)
        }
    }
}

export {ProductController}