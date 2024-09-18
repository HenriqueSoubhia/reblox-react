import BannerBg from "../imgs/banner-bg.png";
import { Link } from "react-router-dom"; // Para navegação interna

const Home = () => {
  return (
    <main className="bg-light-gray flex flex-col items-center gap-20">
      {/* Banner Principal */}
      <section className="relative w-full h-[90vh] flex justify-center items-center">
        <img
          src={BannerBg}
          alt="Banner da Fórmula E"
          className="absolute w-full h-full object-cover brightness-50"
        />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold text-light-white">
            Imersão Virtual na Fórmula E
          </h1>
          <p className="text-xl text-light-white mt-4">
            Explore o futuro da mobilidade elétrica.
          </p>
          <Link
            to="/experiencia"
            className="mt-6 inline-block bg-secondary-blue text-light-white px-6 py-3 font-bold rounded-lg"
          >
            Experimente Agora
          </Link>
        </div>
      </section>

      {/* Introdução à Fórmula E */}
      <section className="w-full max-w-screen-lg text-center px-6 md:px-0">
        <h2 className="text-3xl font-bold mb-4">O que é a Fórmula E?</h2>
        <p className="text-lg leading-relaxed">
          A Fórmula E é a primeira categoria de automobilismo totalmente
          elétrica, promovendo a sustentabilidade e inovação. Com corridas em
          circuitos urbanos ao redor do mundo, a Fórmula E busca acelerar a
          transição para tecnologias de energia limpa.
        </p>
        <Link
          to="/sobre"
          className="mt-4 inline-block text-secondary-blue font-semibold"
        >
          Saiba mais
        </Link>
      </section>

      {/* Problema */}
      <section className="w-full bg-secondary-blue text-light-white py-16">
        <div className="max-w-screen-lg mx-auto text-center px-6 md:px-0">
          <h2 className="text-3xl font-bold mb-6">
            Problemas a Serem Resolvidos
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            A Fórmula E enfrenta desafios como baixa visibilidade, falta de
            engajamento entre os jovens e a experiência de evento limitada.
          </p>
          <Link
            to="/solucao"
            className="mt-4 inline-block text-light-white font-semibold"
          >
            Veja como resolvemos isso
          </Link>
        </div>
      </section>

      {/* Nossa Solução */}
      <section className="w-full max-w-screen-lg text-center px-6 md:px-0 py-16">
        <h2 className="text-3xl font-bold mb-4">Nossa Solução</h2>
        <p className="text-lg leading-relaxed mb-6">
          Desenvolvemos uma experiência virtual no Roblox que permite ao público
          vivenciar o mundo da Fórmula E de maneira interativa e imersiva.
        </p>
        <Link
          to="/solucao"
          className="inline-block bg-secondary-blue text-light-white px-6 py-3 font-bold rounded-lg"
        >
          Saiba mais sobre a Solução
        </Link>
      </section>

      {/* Galeria de Imagens (Preview) */}
      <section className="w-full max-w-screen-lg px-6 md:px-0 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Galeria</h2>
        {/* <GaleryPreview />  Componente que mostra algumas imagens da galeria */}
        <div className="text-center mt-6">
          <Link
            to="/galeria"
            className="inline-block text-secondary-blue font-semibold"
          >
            Ver mais imagens
          </Link>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="w-full bg-primary-blue text-light-white py-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para experimentar a Fórmula E?
          </h2>
          <Link
            to="/experiencia"
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
