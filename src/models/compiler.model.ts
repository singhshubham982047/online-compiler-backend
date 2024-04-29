import { model, Schema } from "mongoose";

interface CompilerCode {
  code: {
    html: string;
    css: string;
    javascript: string;
  };
}

const compilerSchema = new Schema<CompilerCode>(
  {
    code: {
      html: String,
      css: String,
      javascript: String,
    },
  },
  { timestamps: true }
);

export const Code = model("Code", compilerSchema);
