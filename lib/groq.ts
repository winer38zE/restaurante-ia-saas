import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Necesario para correrlo en el navegador
});

export const obtenerConsejoIA = async (ventas: number, gastos: number) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Eres un mentor financiero experto para dueños de restaurantes. Tu meta es convertirlos de cocineros a empresarios. Sé breve, motivador y usa términos como 'Margen de Ganancia' y 'Punto de Equilibrio'."
      },
      {
        role: "user",
        content: `Mis ventas hoy fueron de $${ventas} y mis gastos de insumos $${gastos}. Dame un consejo estratégico.`
      }
    ],
    model: "mixtral-8x7b-32768",
  });

  return chatCompletion.choices[0]?.message?.content;
};