import Content1 from "../../assets/Content/company-01.webp";
import Content2 from "../../assets/Content/company-02.webp";

function Content() {
  return (
    <section className="content">
      <div className="inner-content" id="economia">
        <div className="inner-content-text content__TextLeft">
          <div id="about" className="inter-content-subtitle">
            Hotmart Company
          </div>

          <div className="inner-content-title">
            Uma nova era da Economia dos Criadores
          </div>

          <div className="inner-content-para">
            <p>
              A Hotmart faz parte da Hotmart Company, grupo de empresas criado a
              partir da expansão da Hotmart e que contempla Teachable e eNotas.
            </p>
          </div>

          <a
            target="_black"
            className="highlight"
            href="https://www.hotmart.co/"
          >
            Conheça a Hotmart Company
          </a>
        </div>

        <div className="inner-image-container container__ImageRight">
          <div className="inner-content-image content__ImageRight">
            <img
              className="section-images"
              src={Content1}
              alt="Hotmart Company"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
        </div>
      </div>

      <div className="inner-content" id="autonomia">
        <div className="inner-content-text content__TextRight">
          <div id="features" className="inter-content-subtitle">
            Autonomia
          </div>

          <div className="inner-content-title">
            Liberdade para ser e amor para compartilhar
          </div>

          <div className="inner-content-para">
            <p>
              A nossa cultura é o nosso ativo mais valioso. Cuidamos para que
              cada uma das pessoas que trabalhem aqui possam se desenvolver como
              profissionais e, principalmente, evoluir como pessoas. Buscamos
              talentos que sejam totalmente compatíveis com os nossos três
              pilares: Autonomia, Liberdade e Love.
            </p>
          </div>

          <a
            className="highlight"
            target="_black"
            href="https://hotmart.com/pt-br/trabalhe-conosco"
          >
            Conheça a Hotmart Company
          </a>
        </div>

        <div className="inner-image-container container__ImageLeft">
          <div className="inner-content-image content__ImageLeft">
            <img
              className="section-images"
              src={Content2}
              alt="Cultura Hotmart"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
