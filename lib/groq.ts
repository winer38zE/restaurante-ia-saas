import Groq from "groq-sdk";

export const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY || "",
  dangerouslyAllowBrowser: true 
});

export const obtenerConsejoIA = async (ventas: number, gastos: number) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Eres un mentor financiero para restaurantes de lujo." },
        { role: "user", content: `Ventas: ${ventas}, Gastos: ${gastos}. Dame un consejo breve.` }
      ],
      model: "mixtral-8x7b-32768",
    });
    return completion.choices[0]?.message?.content || "Analizando datos...";
  } catch (error) {
    console.error("Error en Groq:", error);
    return "El mentor está analizando los mercados.";
  }
};