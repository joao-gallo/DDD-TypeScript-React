import { NextFunction, Request, Response } from "express";
import { User } from "../domain/entities/User";
import { UserService } from "../domain/useCase/UserService";

class UserController {
    constructor(private userUseCase: UserService) {}

    public register = async (req: Request, res: Response, next: NextFunction) => {
        const user: Omit<User, "Codigo"> = {
            Nome: req.body.Nome,
            Fantasia: req.body.Fantasia,
            Documento: req.body.Documento,
            Endereco: req.body.Endereco,
            password: req.body.password
        }
        try {
            const result = await this.userUseCase.register(user)
            return res.status(201).json(result);
        } catch (error) {
            next(error)
        }
    }
    public login  = async (req: Request, res: Response, next: NextFunction) => {
        const user: Pick<User, "Nome" | "password"> = {
            Nome: req.body.Nome,
            password: req.body.password
        }

        try {
            const token = await this.userUseCase.login(user)
            return res.cookie('access_token', token, {httpOnly: true}).status(201).json(user.Nome)
            // optei por usar cookies para guardar o token com httpOnly diretamente no back end
        } catch(error) {
            next(error)
        }
    }
    public logout = async (req: Request, res: Response) => {
        res.clearCookie('access_token', {
            sameSite: 'none',
            secure: true,
        }).status(200).json('Deslogando');
        // e aqui fiz o logout limpando os cookies
    }
}

export {UserController}