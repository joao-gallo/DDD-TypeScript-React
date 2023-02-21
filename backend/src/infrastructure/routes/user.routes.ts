import { userController } from "../factories/UserFactory"; 
import { Router } from "express";

const userRoutes = Router()

userRoutes.post('/register', userController.register)
userRoutes.post('/login', userController.login)
userRoutes.get('/logout', userController.logout)

export default userRoutes;