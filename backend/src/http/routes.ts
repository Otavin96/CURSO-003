import { UserController } from "../users/controller/user.controller";
import { Request, Response, Router } from "express";

const Routes = Router();

Routes.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

Routes.post("/users/cadastrar", UserController.insert);
Routes.get("/users/get/:id", UserController.get);
Routes.get("/users/getAll", UserController.getAll);
Routes.put("/users/atualizar/:id", UserController.update);
Routes.delete("/users/deletar/:id", UserController.delete);

export { Routes };
