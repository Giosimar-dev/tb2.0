import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";

function TabuQuebrado01() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Configuração da data
    const dayNames = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const now = new Date();
    const dateStr = `${dayNames[now.getDay()]}, ${now.getDate().toString().padStart(2, "0")} de ${monthNames[now.getMonth()]} de ${now.getFullYear()}`;
    setFormattedDate(dateStr);

    // Adicionando o script para o vídeo
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/74042c53-dfa7-44e4-8bcb-7ddb468bdd1f/players/64a58742580477000a8535d9/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Limpeza ao desmontar o componente
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-red-700 w-full p-2 text-center">
        Cupom de desconto disponível até:
        <span id="descounttime" className="font-semibold">
          {formattedDate}
        </span>
      </div>
      <div id="vid_64a58742580477000a8535d9" style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
        <img
          id="thumb_64a58742580477000a8535d9"
          src="https://images.converteai.net/74042c53-dfa7-44e4-8bcb-7ddb468bdd1f/players/64a58742580477000a8535d9/thumbnail.jpg"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div id="backdrop_64a58742580477000a8535d9" style={{ position: "absolute", top: 0, width: "100%", height: "100%", backdropFilter: "blur(5px)" }} />
      </div>

      <div className="justify-center text-center text-lg w-[600px]">
        <h2>Domine essas técnicas e se torne um homem escasso e idolatrado entre as mulheres</h2>
      </div>
    </ThemeProvider>
  );
}

export default TabuQuebrado01;
