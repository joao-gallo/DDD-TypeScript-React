import { User } from "../entities/User";
import { UserRepository } from "../repository/UserRepository";

class UserService {

    constructor(private repository: UserRepository) { }

    public register = async (entity: Omit<User, "Codigo">): Promise<User> => {
        if (!entity.Fantasia || !entity.Documento || !entity.Nome || !entity.password)
            throw new Error('Os campos não podem estar vazios.')

        // Aqui faço Sanitização de Dados para evitar brechas no código
        if (entity.Fantasia.length > 40)
            throw new Error("Fantasia muito grande");
        if (entity.Documento.length > 40)
            throw new Error("Documento muito grande");
        if (entity.Nome.length > 100)
            throw new Error("Nome muito grande");
        if (entity.password.length < 6)
            throw new Error("Password deve ter mais que 6 caracteres");
        return await this.repository.register(entity)
    }

    public login = async (entity: Omit<User, "Codigo" | "Fantasia" | "Documento" | "Endereco">): Promise<User> => {
        if (!entity.Nome || !entity.password)
            throw new Error("Não podem estar vazios");

        return await this.repository.login(entity)
    }
}

export { UserService }