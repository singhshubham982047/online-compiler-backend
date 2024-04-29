import { Request, Response } from "express";
import { Code } from "../models/compiler.model";

const saveCode = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;

    if (!code)
      return res
        .status(400)
        .json({ success: false, message: "Code is not empty" });
    const fullCode = await Code.create({ code });
    return res.status(201).json({ success: true, fullCode });
  } catch (error) {
    res.status(500).json({ message: "Internal Server", error });
  }
};

const getCodeById = async (req: Request, res: Response) => {
  const { urlId } = req.params;

  try {
    const code = await Code.findById(urlId);

    if (!code)
      return res
        .status(404)
        .json({ success: false, message: "Code not found" });
    return res.status(200).json({ success: true, code });
  } catch (error) {
    res.status(500).json({ message: "Internal Server", error });
  }
};

export { saveCode, getCodeById };
