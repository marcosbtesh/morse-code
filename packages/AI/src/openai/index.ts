import OpenAi from "openai";
import "process";
export const Client = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });
