import { Router } from "express";
import { getCodeById, saveCode } from "../controller/compiler.controller";

const compilerRoute = Router();

compilerRoute.post("/save", saveCode);
compilerRoute.get("/load-code/:urlId", getCodeById);

export default compilerRoute;
