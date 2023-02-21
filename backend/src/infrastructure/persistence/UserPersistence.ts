import mysql from 'mysql2'
import { IUserPersistence } from "../../domain/repository/IUserPersistence"
import bcrypt from 'bcryptjs'
import { User } from "../../domain/entities/User"
import db from '../utils/connection';
import { ResultSetHeader } from "mysql2";
import jwt from 'jsonwebtoken';

class UserPersistenceMySQLAdapter implements IUserPersistence{
    
// Insiro elementos no MySQL
    public  register = async(entity: User): Promise<Pick<User, "Nome" | "Fantasia" | "Documento" | "Endereco" | "password">> => {
        const query = 'INSERT INTO User (Nome, Fantasia, Documento, Endereco, password) VALUES (?, ?, ?, ?, ?)';


// Gero senha com segurança maior
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(entity.password, salt);

// Retorno elementos
        const values = (entity.Nome, entity.Fantasia, entity.Documento, entity.Endereco, hash);
        await db.execute<ResultSetHeader>(query, values)

        const newUser: Pick<User, "Nome" | "Fantasia" | "Documento" | "Endereco" | "password"> = { Nome: entity.Nome, Fantasia: entity.Fantasia, Documento: entity.Documento, Endereco: entity.Endereco, password: entity.password};
        return newUser;


}
    
    public login = async (entity: Pick<User, "Nome" | "password">) => {
        const query = 'SELECT * FROM User WHERE Nome  = ?';
        const values = [entity.Nome];

        const [data] = await db.execute(query, values);
        const [user] = data as User[]

        const isPasswordCorrect = bcrypt.compareSync(
            entity.password,
            user.password,
        );

        if (!isPasswordCorrect)
            throw new Error('Nome ou password estão incorretos')

        const token = jwt.sign({ Codigo: user.Codigo }, 'jwtkey');

        return token
        }

    public findUserByName = async (Nome: string): Promise<User | null> => {
        const query = 'SELECT * FROM User WHERE Nome = ?';
        const values = [Nome];

        const [data] = await db.execute(query, values);
        const [user] = data as User[];
        
        return user || null;
    }
}

export { UserPersistenceMySQLAdapter }