import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { ProductRepository } from "../repositories/ProductRepository";

class ProductController {

    async index(req: Request, res: Response){
        const productRepository = getCustomRepository(ProductRepository);

        const products = await productRepository.find();

        return res.json(products);
    }

    async store(req: Request, res: Response){
        const { name, quantity, price } = req.body;

        const productRepository = getCustomRepository(ProductRepository);

        const existsProduct = await productRepository.findOne({name});

        if(existsProduct){
            throw new AppError("Product already exists", 400)
        }

        const product = productRepository.create({
            name,
            quantity,
            price
        });

        await productRepository.save(product);

        return res.json(product);
    }

}

export default new ProductController();