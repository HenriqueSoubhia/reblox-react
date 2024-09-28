import Button from "../components/Button";
import { Link } from "react-router-dom";

import FormulaE from "../imgs/formulaE.png";

import imgBanco from "../imgs/banco.png"
import imgPitstops from "../imgs/pitstops.png"
import imgPodio from "../imgs/podio.png"
import imgReblox from "../imgs/rebloxsolucao.png"


const Home = () => {

  scrollTo(0, 0)


  return (
    <main className="bg-light-gray flex flex-col items-center">
      {/* Banner Principal */}
      <section className="relative w-full h-[90vh] flex justify-center items-center bg-banner-image bg-cover backdrop-brightness-50 bg-center bg-no-repeat">
        <div className=" text-center bg-opacity-60 z-10 flex flex-col justify-center items-center gap-4 w-full h-full bg-black">
          <h1 className="text-5xl font-bold text-light-white">
            Imersão Virtual na Fórmula E
          </h1>
          <p className="text-xl text-light-white">
            Explore o futuro da mobilidade elétrica.
          </p>
          <Button label="Experimente Agora" targetBlank href="https://www.roblox.com/pt/games/17412031045/reblox" />
        </div>
      </section>

      {/* Introdução à Fórmula E */}
      <section className="px-4 w-full flex flex-col gap-12 items-center text-center max-w-screen-lg py-16 md:px-0">
        <h2 className="text-3xl font-bold">O que é a Fórmula E?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-lg leading-relaxed">
            A Fórmula E é a primeira categoria de automobilismo totalmente
            elétrica, promovendo a sustentabilidade e inovação. Com corridas em
            circuitos urbanos ao redor do mundo, a Fórmula E busca acelerar a
            transição para tecnologias de energia limpa.
          </p>
          <img src={FormulaE} alt="" />
        </div>
        <Button label="Saiba mais" href="/about" variant="secondary" />
      </section>

      {/* Problema */}
      <section className="w-full bg-primary-blue text-light-white py-48 bg-logo-pattern bg-cover">
        <div className="max-w-screen-lg grid gap-4 text-center grid-cols-1 md:grid-cols-5 mx-auto px-6 md:px-0">
          <div className="flex flex-col items-center col-span-2 justify-center gap-6">
            <h2 className="text-3xl font-bold">Nossa Solução</h2>
            <p className="text-lg leading-relaxed">
              Desenvolvemos uma experiência virtual no Roblox que permite ao
              público vivenciar o mundo da Fórmula E de maneira interativa e
              imersiva.
            </p>
            <div className="flex-1 grid-cols-2 grid-rows-2 col-span-3 grid md:hidden">
              <img className="aspect-video" src={imgBanco} alt="" />
              <img className="aspect-video" src={imgPitstops} alt="" />
              <img className="aspect-video" src={imgPodio} alt="" />
              <img className="aspect-video" src={imgReblox} alt="" />
            </div>
            <Button label="Veja como resolvemos isso" href="/solution" />
          </div>
          <div className="hidden flex-1 grid-cols-2 grid-rows-2 col-span-3 md:grid">
            <img className="aspect-video" src={imgBanco} alt="" />
            <img className="aspect-video" src={imgPitstops} alt="" />
            <img className="aspect-video" src={imgPodio} alt="" />
            <img className="aspect-video" src={imgReblox} alt="" />
          </div>
        </div>
      </section>

      {/* Galeria de Imagens (Preview) */}
      {/* <section className="w-full max-w-screen-lg px-6 md:px-0 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Galeria</h2>
         <GaleryPreview />  
        <div className="text-center mt-6">
          <Button label="Ver mais imagens" href="/galeria" />
        </div>
      </section> */}

      {/* Call to Action Final */}
      <section className="w-full bg-hover-blue text-light-white py-32">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para experimentar a Fórmula E?
          </h2>
          <Link
            target="_blank"
            to="https://www.roblox.com/pt/games/17412031045/reblox"
            className="inline-block bg-light-white text-primary-blue px-8 py-4 font-bold rounded-lg"
          >
            Explore no Roblox
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
