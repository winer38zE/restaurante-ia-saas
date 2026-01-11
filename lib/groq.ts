import Groq from "groq-sdk";

const groq = new Groq({
  // En Next.js se usa process.env.NEXT_PUBLIC_... para el navegador
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, 
  dangerouslyAllowBrowser: true 
});