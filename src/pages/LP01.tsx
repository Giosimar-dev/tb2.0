import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

function TabuQuebrado01() {
  const [formattedDate, setFormattedDate] = useState("");

  const handleClick = () => {
    window.location.href = "https://pay.hotmart.com/U84454802C?off=06nqtnoa&checkoutMode=10&src=tabucode01";
  };

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
        <p>
          Cupom de desconto disponível até:
          <br />
          <span id="descounttime" className="font-semibold">
            {formattedDate}
          </span>
        </p>
      </div>
      <div id="vid_64a58742580477000a8535d9" style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
        <img
          id="thumb_64a58742580477000a8535d9"
          src="https://images.converteai.net/74042c53-dfa7-44e4-8bcb-7ddb468bdd1f/players/64a58742580477000a8535d9/thumbnail.jpg"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div id="backdrop_64a58742580477000a8535d9" style={{ position: "absolute", top: 0, width: "100%", height: "100%", backdropFilter: "blur(5px)" }} />
      </div>

      <div className="justify-center text-center text-2xl font-bold p-2">
        <h2>Domine essas técnicas e se torne um homem escasso e idolatrado entre as mulheres</h2>
        <img className="mt-5 rounded-2xl " src="./Design-sem-nome-38-1024x1024.webp" alt="" />
      </div>
      <div className="text-center">
        <p className="text-red-600 line-through text-3xl ">De R$197,00</p>
        <p className=" text-3xl ">Por apenas</p>
      </div>
      <div className="flex text-center justify-center font-bold items-end">
        <h3 className="text-2xl">R$</h3>
        <h1 className="text-8xl">29</h1>
        <h3 className="text-2xl">,90</h3>
      </div>
      <div className="text-center mt-5">
        <Button className="p-10 bg-green-600 animate-bounce" onClick={handleClick}>
          <p>
            <span className="text-4xl">CLIQUE AQUI</span>
            <br />
            <span>E FINALIZE SUA INSCRIÇÃO AGORA!</span>
          </p>
        </Button>
      </div>
      <div className="pl-10 pr-10 text-center text-base mt-5">
        <p>Você vai receber videoaulas gravadas em uma modelo real, para que não perca nenhum detalhe + E-book com tudo explicado em imagens referente às videoaulas ministradas.</p>
      </div>
      <img className="p-3" src="./WhatsApp-Image-2023-01-12-at-11.webp" alt="" />

      <div className="p-5 ">
        <div className="border-4 rounded-3xl p-2 border-red-600 text-center bg-slate-950 shadow-red-600">
          <p className="text-red-600 text-3xl font-semibold">Videoaulas + E-book</p>
          <p className=" pl-5 pr-5 text-2xl font-semibold">23 Técnicas para fazer em uma mulher + Curso Lambida Perfeita</p>
          <img className="mt-5 pr-10 pl-10 rounded-2xl " src="./Design-sem-nome-38-1024x1024.webp" alt="" />
          <div className="text-center">
            <p className="text-red-600 line-through text-3xl ">De R$197,00</p>
            <p className=" text-3xl ">Por apenas</p>
          </div>
          <div className="flex text-center justify-center font-bold items-end">
            <h3 className="text-2xl">R$</h3>
            <h1 className="text-8xl">29</h1>
            <h3 className="text-2xl">,90</h3>
          </div>
          <div className="text-center mt-5">
            <Button className="p-10 rounded-full animate-bounce mb-10 mt-5" onClick={handleClick}>
              <p>
                <span className="text-2xl">COMPRAR AGORA</span>
              </p>
            </Button>
          </div>
        </div>
        <div className="text-center">
          <img className="m-auto p-3 size-48" src="./Selo-de-Garantia-de-7-Dias-PNG-T.webp" alt="" />
          <p>
            Se você seguir o passo a passo, aplicar e praticar o que eu ensinei, e mesmo assim não tiver resultados, basta enviar um e-mail para suporte@tabuquebrado.com.br pedindo o reembolso que nós
            devolveremos o seu dinheiro. O prazo é de 7 dias, sem letras miúdas, simplesmente devolveremos!
          </p>
        </div>
        <div className="text-sm text-gray-400 text-center mt-9">
          <p>Todos os direitos reservados a TABU Quebrado</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TabuQuebrado01;
