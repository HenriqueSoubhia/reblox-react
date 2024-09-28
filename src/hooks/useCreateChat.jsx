import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const useCreateChat = () => {
  const [history] = useState([
    {
      role: "user",
      parts: [
        {
          text: "Você é um assistente especializado em explicar a Fórmula E, inovações tecnológicas e sustentabilidade no automobilismo. Sua tarefa é responder a perguntas relacionadas a esses temas de forma objetiva e clara, com respostas curtas e diretas. Caso o usuário faça perguntas fora desses tópicos, informe educadamente que o assunto está fora do escopo do assistente. Não utilize formatação complexa, como markdown ou listas. Evite diálogos extensos e foque apenas nas informações mais relevantes. Esse é o produto: Experiência Gamificada Virtual Interativa Educativa da Fórmula E. O cliente, Tech Mahindra, busca popularizar a Fórmula E, destacando seu compromisso com o meio ambiente. A proposta envolve um museu/tour virtual no Roblox, destacando a história e curiosidades da Fórmula E, além de permitir interação entre os jogadores. O nome da experiência é 'Reblox'. ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Bem vindo! Do que voce precisa?",
        },
      ],
    },
  ]);
  const [messages, setMessages] = useState(history);

  const [loading, setLoading] = useState(false)

  const generateChat = () => {
    const API_KEY = "AIzaSyDpF3pGM2DVa_8zD0pAIgrP2MsGqRPG_pg";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const newChat = model.startChat({ history });
    return newChat;
  };

  const chat = generateChat();

  const sendMessage = async (message) => {
    setLoading(true)
    await chat.sendMessage( message);
    setLoading(false)

    setMessages(history);
  };

  return {
    chat,
    sendMessage,
    messages,
    loading
  };
};

export default useCreateChat;
