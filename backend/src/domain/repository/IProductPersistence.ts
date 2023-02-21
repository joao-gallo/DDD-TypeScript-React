interface IProductPersistence {
    registerProduct(entity: any): Promise<any>
}

export {IProductPersistence}