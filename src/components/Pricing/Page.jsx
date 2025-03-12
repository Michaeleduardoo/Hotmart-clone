const Pricing = () => {
  return (
    <section className="pricing-container" id="precos">
      <div id="pricing" className="pricing-title">
        <h2>
          Quanto mais você fatura, menos você paga e mais benefícios ganha
        </h2>
      </div>

      <div className="flex-container">
        {plans.map((plan, index) => (
          <div className="flex-item" key={index}>
            <ul className="package">
              <li className="header">{plan.title}</li>
              <li className="gray">
                <sup className="dolla">{plan.price}</sup>
                <br />
                <span className="month">{plan.extra}</span>
              </li>
              {plan.features.map((feature, i) => (
                <li className="features" key={i}>
                  {feature}
                </li>
              ))}
              <li className="pricingLi">
                <a
                  className="pricing-button"
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.buttonText}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const plans = [
  {
    title: "Até 5 dígitos de Faturamento anual",
    price: "9,9%",
    extra: "+ 1 real por venda aprovada",
    features: [
      "Atendimento 7 dias por semana, direto na plataforma",
      "Guias práticos e tutoriais: para usar nossas ferramentas",
      "Hotmart Academy: cursos gratuitos para vender mais",
      "Hotmart Club: área de membros personalizada",
      "Hotmart Pages & Send: crie emails e páginas de vendas grátis",
    ],
    buttonText: "Comece agora",
    link: "https://sso.hotmart.com/signup",
  },
  {
    title: "6 dígitos de Faturamento anual",
    price: "8,9%¹",
    extra: "+ 1 real por venda aprovada",
    features: [
      "Gerente de Contas para você e sua equipe",
      "Atendimento via Whatsapp para dúvidas técnicas",
      "Comunidade no Telegram: tira-dúvidas e parcerias",
      "Suporte operacional para dúvidas técnicas",
      "Academy Sessions: evento online com grandes nomes do mercado",
      "Rodas de conversa com especialistas Hotmart",
    ],
    buttonText: "Fale com Especialista",
    link: "https://signup.hotmart.com/pt-br/bu-new-gmv-migracao-lp-signup-migracaofire-o?utm_medium=organic&utm_campaign=Pricing_A/B&utm_content=cta_02ab&_gl=1*1uvn54t*_gcl_au*MTU4NjkzNDkwMC4xNzQwNjU3ODcw*_ga*MjA3NTgwNzU1LjE3NDA2NTc4Njk.*_ga_GQH2V1F11Q*MTc0MTc5NDY0OS42LjEuMTc0MTc5NDc1NC42MC4wLjE3ODY3OTc3MTU.",
  },
  {
    title: "7 dígitos de Faturamento anual",
    price: "Negociação personalizada",
    extra: "",
    features: [
      "Equipe de Integração: suporte contínuo e estratégico para seu negócio",
      "Configuração e migração de ferramentas: com nosso time especializado",
      "Hotmart Day: evento presencial, conteúdos inéditos e networking²",
      "Treinamentos sob medida para usar as ferramentas Hotmart",
      "Masterminds e Consultorias: condições especiais²",
      "Escritórios Hotmart: acesso aos estúdios profissionais e auditório²",
      "Hotseats: encontros para resolução de desafios da comunidade",
    ],
    buttonText: "Fale com Especialista",
    link: "https://signup.hotmart.com/pt-br/bu-new-gmv-migracao-lp-signup-migracaofire-o?utm_medium=organic&utm_campaign=Pricing_A/B&utm_content=cta_02ab&_gl=1*1uvn54t*_gcl_au*MTU4NjkzNDkwMC4xNzQwNjU3ODcw*_ga*MjA3NTgwNzU1LjE3NDA2NTc4Njk.*_ga_GQH2V1F11Q*MTc0MTc5NDY0OS42LjEuMTc0MTc5NDc1NC42MC4wLjE3ODY3OTc3MTU.",
  },
  {
    title: "Acima de 8 dígitos de Faturamento anual",
    price: "Negociação personalizada",
    extra: "",
    features: [
      "Estrategista focado em soluções personalizadas para o seu negócio",
      "Acesso direto aos executivos e especialistas da Hotmart",
      "Eventos 8D: encontros exclusivos da comunidade 8 dígitos³",
      "Acompanhamento dedicado: análise de Lançamentos com dados exclusivos para sua realidade",
      "Hotmart Fire: acesso ao Warmup, ingresso VIP e prioridade de palestra²",
      "Acesso aos estudos de mercado específicos para seu negócio",
      "Hotseats: encontros para resolução de desafios da comunidade",
      "Mentorias com a equipe sênior da Hotmart para escalar sua empresa²",
    ],
    buttonText: "Fale com Especialista",
    link: "https://signup.hotmart.com/pt-br/bu-new-gmv-migracao-lp-signup-migracaofire-o?utm_medium=organic&utm_campaign=Pricing_A/B&utm_content=cta_02ab&_gl=1*1uvn54t*_gcl_au*MTU4NjkzNDkwMC4xNzQwNjU3ODcw*_ga*MjA3NTgwNzU1LjE3NDA2NTc4Njk.*_ga_GQH2V1F11Q*MTc0MTc5NDY0OS42LjEuMTc0MTc5NDc1NC42MC4wLjE3ODY3OTc3MTU.",
  },
];

export default Pricing;
