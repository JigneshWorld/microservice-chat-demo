import { Express } from "express";
import AppDataSource from "#root/db/connection";
import User from "#root/db/entity/User";

const setupRoutes = (app: Express) => {
  const userRepository = AppDataSource.manager.getRepository(User);
  app.get("/users/:userId", async (req, res, next) => {
    try {
      const user = await userRepository.findOneBy({ id: req.params.userId });
      if (!user) return next(new Error("Invalid user ID!"));
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });
};

export default setupRoutes;
