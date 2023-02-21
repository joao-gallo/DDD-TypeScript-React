import { UserController } from "../../controllers/UserController";
import { IUserPersistence } from "../../domain/repository/IUserPersistence";
import { UserRepository } from "../../domain/repository/UserRepository";
import { UserService } from "../../domain/useCase/UserService";
import { UserPersistenceMySQLAdapter } from "../persistence/UserPersistence";


const userPersistence: IUserPersistence = new UserPersistenceMySQLAdapter()
const userRepository = new UserRepository(userPersistence)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

export {userController}