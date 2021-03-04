import { UserRepository } from "../repositories/UserRepository";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";

class UserService {
    async index(req: Request, res: Response) {

    }

    async store(req: Request, res: Response){
        const { name, email, password } = req.body;

        const userRepository = getCustomRepository(UserRepository);

        const userAlreadyExist = await userRepository.findOne({
            email
        });

        if(userAlreadyExist){
            throw new AppError("User already exists", 400);
        }

        const user = userRepository.create({
            name,
            email,
            password
        });

        await userRepository.save(user);

        return res.status(201).json({message: "User successfully registered"});
    }

    async show(req: Request, res: Response){

    }

    async update(req: Request, res: Response){

    }

    async delete(req: Request, res: Response) {
        
    }

}

export default new UserService();