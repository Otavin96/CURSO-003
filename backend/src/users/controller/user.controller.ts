import { AppDataSource } from "../../typeorm";
import { Request, Response } from "express";
import { User } from "../entities/user.entity";

export class UserController {
  static async insert(req: Request, res: Response) {
    const user = req.body;
    const { email } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const data = await userRepository.findOneBy({ email });

    if (data) {
      throw new Error("E-mail já cadastrado!");
    }

    await userRepository.save(user);
    res.status(201).json(user);
  }

  static async get(req: Request, res: Response) {
    const id = req.params;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: id });
    res.status(200).json({ message: "Usuario encontrado com sucesso!", user });
  }

  static async getAll(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    res.status(200).json({ message: "Todos os usuários cadastrados!", users });
  }

  static async update(req: Request, res: Response) {
    const id = req.params;
    const user = req.body;

    const userRepository = AppDataSource.getRepository(User);

    const updateUser = await userRepository.findOne({ where: id });

    if (user.name) {
      updateUser.name = user.name;
    }

    if (user.email) {
      updateUser.email = user.email;
    }

    const userUpdate = await userRepository.update(id, updateUser);

    res
      .status(200)
      .json({ message: "Usuário alterado com sucesso!!", userUpdate });
  }

  static async delete(req: Request, res: Response) {
    const id = req.params;
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.delete(id);
    res.status(200).json("Usuario excluido com sucesso!");
  }
}
