import express from 'express'
import { loginUser, registeruser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login",loginUser)

export default userRouter
