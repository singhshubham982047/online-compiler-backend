import { Router } from "express";
import { getCodeById, saveCode } from "../controller/compiler.controller";

const compilerRoute = Router();

compilerRoute.post("/save", saveCode);
compilerRoute.post("/load-code", getCodeById);

export default compilerRoute;
