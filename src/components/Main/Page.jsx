function Main() {
  return (
    <>
      <main className="container" id="produto">
        <section className="hero container">
          <h1 className="hero-title-primary">Crie seu Produto</h1>
          <p className="hero-title-sub">
            Compartilhe seu conhecimento de forma estruturada, com vídeo-aulas,
            materiais de apoio e exercícios práticos.
          </p>

          <button
            title="Criar Curso Online"
            onClick={() =>
              window.open(
                "https://hotmart.com/pt-br/criar-curso-online",
                "_blank"
              )
            }
          >
            Curso Online
          </button>
        </section>

        <div className="hero-image">
          <figure>
            <img
              src="https://lirp.cdn-website.com/cc99dfe5/dms3rep/multi/opt/mobile_primeira+imagem-1920w.png"
              width="500px"
              alt="Imagem representativa do curso online"
            />
          </figure>
        </div>
      </main>
    </>
  );
}

export default Main;
