import { User } from "../entities/User";
import { IUserPersistence } from "./IUserPersistence";

class UserRepository {

    constructor(private iPersistence: IUserPersistence) {}

    //Acima fiz uso de arquitetura hexagonal para definir uma porta e poder conectar o banco que for desejado posteriormente.
    //Segui o contexto do livro DDD do Eric Evans

    public register = async (entity: Omit<User, "Codigo">): Promise<User> => {
        return await this.iPersistence.register(entity)
    }

    // Estou retornando a porta chamada de iPersistence usando o método(login) e passando a entidade como parametro, de novo me referindo à arquitetura hexagonal

    public login = async (entity: Pick<User, "Nome" | "password">) => {
        return await this.iPersistence.login(entity)
    }

    // Estou usando Utility Types do TypeScript para realizar funções básicas sem depender de tecnologias externas (Omit remove o item id, e Pick retorna os itens Nome e password)

    public findUserByName = async (Nome: string) => {
        return await this.iPersistence.findUserByName(Nome)
    }
}
// Quem utilizar essa classe pode usar qualquer banco de dados passando na porta iPersistence, pois fiz inversão de dependência
export {UserRepository}