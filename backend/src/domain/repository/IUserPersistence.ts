interface IUserPersistence {
    register(entity: any): Promise<any>
    login(entity: any): any
    findUserByName(Nome: string): Promise<any>
}

export {IUserPersistence}