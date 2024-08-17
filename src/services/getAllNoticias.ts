interface GetAllNoticiasProps {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  mostrarDescricaoNaNoticia: boolean;
  tempoDeLeitura: number;
  conteudoNoticia: string;
  dataDePublicacao: Date;
}

export const getAllNoticias: GetAllNoticiasProps[] = [
  {
    id: 995,
    imagem:
      "https://img.freepik.com/fotos-premium/mercado-de-acoes-digital-grafico-grafico-negocios-bolsa-de-valores-negociacao-analise-investimento-financeiro_73523-5167.jpg",
    titulo: "Crescimento no Setor de Cibersegurança no Brasil",
    descricao:
      "Entre maio de 2023 e maio de 2024, o Brasil se posicionou como o terceiro país com maior crescimento na força de trabalho de cibersegurança, conforme dados exclusivos do LinkedIn Economic Graph. O crescimento foi de 4,5%, colocando o país atrás apenas da Alemanha (4,7%) e da Espanha (5,5%). Este aumento reflete uma crescente demanda por profissionais qualificados em um cenário global cada vez mais focado na proteção contra ameaças cibernéticas.",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 5,
    conteudoNoticia: `
<section class="pb-8">
    <h2 class="text-2xl mb-4">Liderança no Crescimento de Vagas em Cibersegurança</h2>
    <p class="mb-4">O Brasil não só ocupa uma posição de destaque no crescimento anual das vagas, mas também lidera a lista de países com maior crescimento na proporção de vagas em cibersegurança nos últimos quatro anos, com um aumento de 11,2%. Esse crescimento é um sinal positivo para o mercado de trabalho no setor, indicando uma forte ênfase na segurança cibernética em comparação com outras indústrias. No entanto, uma análise mais ampla revela uma possível estagnação global, com quedas observadas em oito dos 14 países analisados.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Desafios e Impactos Recentes</h2>
    <p class="mb-4">O setor de cibersegurança enfrenta desafios significativos. Recentemente, um apagão global de TI e problemas com a gigante CrowdStrike evidenciaram a vulnerabilidade das empresas a falhas de segurança, gerando desconfiança nos investimentos em cibersegurança. Além disso, a alta demanda por profissionais qualificados não se traduz automaticamente em crescimento sustentável devido a questões como a qualidade das vagas e o estresse associado ao trabalho.</p>    
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Potencial de Crescimento e Qualidade das Vagas</h2>
    <p class="mb-4">Embora o potencial de expansão do setor no Brasil seja promissor, com a possibilidade de um crescimento de 41,7% se todos os profissionais qualificados estivessem atuando na área, há obstáculos a serem superados. A pressão e o estresse associados à proteção de sistemas críticos têm levado quase um terço dos profissionais a considerar deixar a profissão, de acordo com uma pesquisa da Issa International. Melhorar as condições de trabalho e a qualidade das oportunidades pode ser crucial para manter o crescimento do setor e garantir a satisfação dos profissionais.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Conclusão</h2>
    <p>A crescente demanda por profissionais de cibersegurança coloca o Brasil em destaque no cenário global. No entanto, desafios como a qualidade das vagas e a pressão no trabalho precisam ser enfrentados para sustentar o crescimento do setor. A abordagem das empresas e a gestão das condições de trabalho serão essenciais para garantir um mercado de cibersegurança robusto e atraente para os talentos necessários.</p>
</section>
`,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 996,
    imagem:
      "https://static.poder360.com.br/2024/05/joe-biden-dezembro-2023-848x477.jpg",
    titulo:
      "Biden Lança Novas Regras para Facilitar Cancelamentos e Melhorar o Atendimento ao Consumidor",
    descricao:
      "A administração Biden está implementando novas regras para acabar com as práticas empresariais que dificultam o cancelamento de serviços e o atendimento ao cliente. Descubra como essas medidas prometem aliviar as dores de cabeça dos consumidores e garantir um mercado mais justo.",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 5,
    conteudoNoticia: `
<section class="pb-8">
    <h2 class="text-2xl mb-4">Facilidade no Cancelamento de Serviços</h2>
    <p class="mb-4">O governo Biden anunciou novas políticas que exigem que as empresas facilitem o cancelamento de assinaturas e serviços, tornando o processo tão simples quanto a assinatura. A partir de agora, será mais fácil cancelar serviços de academias, telefonia e internet com apenas alguns cliques, combatendo a prática de dificultar a rescisão para manter os clientes e seus pagamentos.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Atendimento ao Cliente Mais Eficiente</h2>
    <p class="mb-4">A nova regra do Consumer Financial Protection Bureau estabelece que as empresas devem permitir que os clientes evitem os intermináveis "loops" de atendimento automático e sejam atendidos por uma pessoa real com a pressão de um único botão. Esta medida visa acabar com a frustração dos consumidores ao tentar resolver problemas ou obter informações importantes.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Melhoria na Submissão de Reivindicações de Seguro</h2>
    <p class="mb-4">Além das melhorias no atendimento ao cliente, a administração também está pressionando as seguradoras de saúde a permitir que as reivindicações sejam enviadas online, ao invés de exigir o envio físico de documentos. Essa mudança visa simplificar o processo para os consumidores e agilizar a cobertura de despesas médicas.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Iniciativas para Reduzir Custos e Inflacionar</h2>
    <p class="mb-4">Essas novas políticas fazem parte de um esforço mais amplo da administração Biden para reduzir os custos diários e combater a inflação persistente. Entre outras iniciativas, o governo está combatendo taxas ocultas, exigindo reembolsos automáticos para voos atrasados e removendo dívidas médicas dos relatórios de crédito. O objetivo é criar um mercado mais justo e transparente, beneficiando diretamente os consumidores.</p>
</section>

`,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 997,
    imagem:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg83J8ii_6n7kz3Q4T3su_46-ASPjQiCnGTqbgBjyWUdIIw4WEJI2l6rAglm2ui5XWt-5fCvUgUPNwc_PDSSKSB4aB7szp1dsMv7kj8uH8XNIw1is1IlSy1Qg3oFr4lV3P2mSudNDuCSRsnvLWbldYAiKlk8flfWX98GlvTyWqOHVBOgIaQXGXuuALfKhmQ/s640/IMG_3184.jpeg",
    titulo:
      "Neuralink Avança em Implantes Cerebrais: Segundo Paciente Recebe o Chip Cerebral",
    descricao:
      "A Neuralink faz história ao realizar a implantação de um chip cerebral em seu segundo paciente, ampliando as possibilidades para pessoas com lesões na medula espinhal. O avanço promete transformar a interação com a tecnologia e melhorar a qualidade de vida.",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
<section class="pb-8">
    <h2 class="text-2xl mb-4">A Revolução dos Implantes Cerebrais</h2>
    <p class="mb-4">A Neuralink, empresa de neurotecnologia cofundada por Elon Musk, está dando passos significativos na área de implantes cerebrais. Recentemente, a empresa realizou a implantação de um chip cerebral em seu segundo paciente, avançando na pesquisa para ajudar pessoas com lesões na medula espinhal. O dispositivo, que já foi testado com sucesso em um primeiro paciente, promete revolucionar a forma como interagimos com a tecnologia e pode abrir portas para novas formas de comunicação e controle.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">O Sucesso do Primeiro Paciente</h2>
    <p class="mb-4">O primeiro paciente a receber o chip cerebral da Neuralink demonstrou a eficácia do dispositivo de forma impressionante. Após o implante, ele conseguiu realizar uma série de atividades complexas apenas com o pensamento. Entre as conquistas notáveis estão jogar videogames, navegar na internet, postar nas redes sociais e mover o cursor do computador. Essas habilidades mostram o potencial do chip para restaurar funções motoras e cognitivas em pessoas com sérias limitações físicas.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Relatos do Primeiro Paciente</h2>
    <p class="mb-4">O primeiro paciente implantado com o chip da Neuralink compartilhou suas experiências após o procedimento, fornecendo insights valiosos sobre como a tecnologia está impactando sua vida. Ele relatou uma sensação de grande autonomia e controle, que não havia experimentado antes do implante. O paciente expressou empolgação com a capacidade de realizar tarefas diárias que antes eram impossíveis, como interagir com dispositivos digitais e realizar atividades online apenas com o pensamento.</p>
    <p class="mb-4">O paciente também destacou a importância emocional desse avanço tecnológico, pois a capacidade de se conectar com o mundo digital e participar ativamente das redes sociais trouxe um novo senso de normalidade e interação social.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">O Progresso do Segundo Paciente</h2>
    <p class="mb-4">O segundo paciente que recebeu o implante já está com 400 dos 1.024 eletrodos do chip em funcionamento. Esse progresso é um sinal encorajador para a continuidade dos ensaios clínicos. Cada eletrodo é responsável por captar e transmitir sinais neurais ao dispositivo, permitindo a comunicação direta entre o cérebro e a tecnologia. O fato de que o dispositivo já está parcialmente funcional demonstra um avanço significativo e uma promessa de que a tecnologia está se aproximando da realidade para muitos indivíduos que necessitam dessas soluções.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Próximos Passos e Futuro dos Ensaios Clínicos</h2>
    <p class="mb-4">A Neuralink planeja realizar o procedimento em mais oito indivíduos ainda este ano como parte dos ensaios clínicos em andamento. Esses testes adicionais são essenciais para validar a segurança e a eficácia do chip cerebral em uma gama mais ampla de pacientes. A expectativa é que esses avanços possam não apenas melhorar a qualidade de vida dos indivíduos com lesões na medula espinhal, mas também abrir novas possibilidades para a interface cérebro-computador no futuro.</p>
</section>

<section class="pb-8">
    <h2 class="text-2xl mb-4">Conclusão</h2>
    <p>Os recentes desenvolvimentos da Neuralink destacam um marco significativo na tecnologia de implantes cerebrais. Com o sucesso do primeiro paciente e o progresso promissor do segundo, a empresa está bem posicionada para continuar sua missão de transformar a vida das pessoas com lesões graves. À medida que os ensaios clínicos avançam, o potencial de uma nova era na integração entre cérebro e tecnologia se torna cada vez mais palpável.</p>
</section>
`,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 998,
    imagem: "https://i.ytimg.com/vi/q-Fnl8EpHMY/maxresdefault.jpg",
    titulo:
      "Brasil em Alerta: Segundo País Mais Afetado por Roubo Online de Cartões",
    descricao:
      'Um estudo revela que o Brasil é o segundo país mais impactado por roubos de dados de cartões online, com o malware "Readline" sendo o principal responsável pelos ataques.',
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <section class="pb-8">
          <h2 class="text-2xl mb-4">A Gravidade da Situação no Brasil</h2>
          <p class="mb-4">Recentemente, um estudo da NordVPN destacou um problema crescente com a segurança online no Brasil. O país foi identificado como o segundo mais afetado por roubos de dados de cartões, logo após os Estados Unidos. A pesquisa analisou mais de 600 mil dados roubados disponíveis em canais de hackers no Telegram, revelando a magnitude do problema e as táticas usadas pelos criminosos.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">O Malware "Readline" e Seus Perigos</h2>
          <p class="mb-4">O estudo encontrou que o malware mais comum em ataques de roubo de dados de cartões é o "Readline". Mas o que é exatamente o "Readline" e como ele funciona?</p>
          <ul class="list-disc pl-5 mb-4">
              <li><strong>O que é o Readline?</strong>  </br>
                  <p class="mt-2">O "Readline" é um tipo de software malicioso projetado para roubar informações pessoais, como dados de cartões de crédito. Ele é feito para se infiltrar no seu dispositivo sem que você perceba.</p>
              </li>
              <li class="mt-4"><strong>Como o Readline se espalha?</strong>  
                  <ul>
                    <li class="mt-2 mb-2"> - E-mails de phishing: Você pode receber um e-mail que parece verdadeiro, mas contém um link ou anexo que, ao ser clicado, instala o malware no seu dispositivo.</li>
                    <li class="mb-2"> - Anúncios enganosos: Alguns anúncios em sites podem parecer atraentes, mas na verdade são iscas para fazer você baixar o malware.</li>
                    <li class="mb-2"> - Entradas USB comprometidas: Dispositivos USB, como pen drives, podem estar infectados e, ao serem conectados ao seu computador, instalar o "Readline".</li>
                  </ul>
              </li>
          </ul>
          <p class="mb-4">O aumento no uso do "Readline" indica que os hackers estão aperfeiçoando suas técnicas para enganar e roubar dados. Isso destaca a necessidade urgente de reforçar a proteção dos seus dados pessoais.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">Medidas de Proteção e Prevenção</h2>
          <p class="mb-4">Para proteger suas informações, adote as seguintes práticas:</p>
          <ul class="list-disc pl-5 mb-4">
              <li class="mb-3"><strong>Evite clicar em links desconhecidos:</strong> Não abra links de e-mails ou mensagens suspeitas.</li>
              <li class="mb-3"><strong>Cuidado com os anexos:</strong> Não abra anexos de e-mails que você não esperava.</li>
              <li><strong>Verifique dispositivos USB:</strong> Certifique-se de que qualquer dispositivo USB que você conecta não esteja comprometido.</li>
          </ul>
          <p class="mb-4">Manter seu software de segurança atualizado e estar atento a possíveis ameaças é fundamental para proteger seus dados de ataques como o do "Readline".</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">Conclusão</h2>
          <p>O estudo da NordVPN sublinha a seriedade do roubo de dados de cartões no Brasil, colocando o país em segundo lugar após os EUA. A disseminação do malware "Readline" mostra como os hackers estão se tornando mais sofisticados. É crucial que todos estejam vigilantes e adotem medidas de segurança para proteger suas informações pessoais e reduzir a exposição a esses ataques cibernéticos.</p>
      </section>
`,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 999,
    imagem:
      "https://img.odcdn.com.br/wp-content/uploads/2022/08/shutterstock_1465754660.jpg",
    titulo:
      "Lacunas de Segurança no macOS: Estudo Revela Desempenho Preocupante",
    descricao:
      "Um novo estudo revela que o macOS está significativamente atrás do Windows e do Linux em termos de prevenção de ciberataques, com um aumento alarmante de malwares direcionados a Macs em 2023.",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 5,
    conteudoNoticia: `
      <section class="pb-8">
          <h2 class="text-2xl mb-4">A Revelação do Estudo</h2>
          <p class="mb-4">Recentemente, um estudo abrangente revelou falhas de segurança notáveis no macOS em comparação com outros sistemas operacionais. Utilizando mais de 130 milhões de simulações de ciberataques, a pesquisa demonstrou que o sistema da Apple conseguiu prevenir apenas 23% dos ataques. Em contraste, o Windows e o Linux mostraram um desempenho muito superior, com taxas de prevenção de 62% e 65%, respectivamente. Esses números destacam a vulnerabilidade crescente dos Macs, especialmente em um cenário onde a segurança cibernética se torna cada vez mais crítica.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">Aumento dos Malwares e Desafios de Segurança</h2>
          <p class="mb-4">O cenário de segurança do macOS tem se agravado desde o início de 2023, com um aumento de 50% nos malwares direcionados a Macs. Este crescimento é atribuído à maior adoção do sistema em ambientes corporativos, tornando-o um alvo mais atraente para criminosos cibernéticos. A falta de eficácia na prevenção de ataques, combinada com a ascensão dos malwares, levanta sérias questões sobre a robustez do macOS e a necessidade urgente de melhorias em sua segurança.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">Implicações e Próximos Passos</h2>
          <p class="mb-4">Para usuários e empresas, os resultados do estudo são um alerta claro: o macOS precisa de uma abordagem mais sólida para enfrentar as ameaças cibernéticas. A Apple deverá intensificar seus esforços para reforçar a segurança do sistema, enquanto empresas que utilizam Macs devem considerar medidas adicionais de proteção, como softwares antivírus e práticas de segurança mais rigorosas. À medida que o panorama de ameaças evolui, a segurança do macOS se tornará um ponto focal crucial para a proteção de dados e sistemas.</p>
      </section>
`,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1000,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo:
      "Ex-Engenheiro do Google Critica o Estado Atual do Desenvolvimento de Software",
    descricao:
      "Em uma análise contundente sobre o estado atual do desenvolvimento de software, Avery Pennarun, ex-engenheiro do Google, trouxe à tona questões críticas sobre as práticas predominantes na indústria. Em suas observações, destacadas recentemente pelo site Slashdot, Pennarun critica o foco excessivo em escalabilidade e complexidade desnecessária que, segundo ele, tem levado os desenvolvedores a se perderem em um labirinto de trabalho extra e muitas vezes desnecessário.",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <section class="pb-8">
          <h2 class="text-2xl mb-4">O Problema da Escalabilidade Excessiva</h2>
          <p class="mb-4">Pennarun argumenta que o mercado de tecnologia tem uma obsessão quase patológica com a escalabilidade. Embora a capacidade de um sistema para crescer e lidar com maiores demandas seja importante, ele acredita que muitos desenvolvedores e empresas estão exagerando essa preocupação. A escalabilidade, em vez de ser uma consideração prática e bem ponderada, está se tornando uma meta em si mesma, levando a um planejamento e a um design que visam suportar cenários de crescimento muito além das necessidades reais do usuário.</p>
          <p>Essa obsessão pode levar a decisões arquitetônicas que complicam o software desnecessariamente. Em vez de criar soluções simples e eficazes que atendam às demandas atuais, os desenvolvedores frequentemente se veem forçados a implementar soluções complexas que podem nunca ser utilizadas em sua totalidade. Pennarun sugere que essa abordagem não só é ineficiente, mas também prejudica a experiência do desenvolvedor e a qualidade do software.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">A Complexidade Desnecessária</h2>
          <p class="mb-4">Além do foco excessivo na escalabilidade, Pennarun critica a tendência crescente de adicionar camadas de complexidade aos sistemas. Ele aponta que muitos desenvolvedores se sentem pressionados a criar soluções que atendam a uma infinidade de possíveis cenários futuros, em vez de se concentrar nas necessidades reais e imediatas do projeto.</p>

          <p class="mb-4">Essa complexidade não só aumenta o custo e o tempo de desenvolvimento, mas também torna o código mais difícil de manter e de evoluir. Pennarun destaca que, ao adicionar funcionalidades e opções que não são necessárias para o funcionamento básico do sistema, os desenvolvedores acabam se atolando em tarefas extras que desviam o foco do desenvolvimento de recursos realmente valiosos para os usuários.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">O Efeito sobre os Desenvolvedores</h2>
          <p class="mb-4">Uma das principais críticas de Pennarun é que esse foco em escalabilidade e complexidade está deixando os desenvolvedores sobrecarregados. Em vez de trabalhar em projetos inovadores e empolgantes, muitos se encontram atolados em tarefas relacionadas a manutenção e ajustes de sistemas excessivamente complexos. Isso não apenas diminui a eficiência, mas também pode levar a uma menor satisfação no trabalho e a um desgaste significativo na equipe de desenvolvimento.</p>
          <p class="mb-4">Pennarun sugere que, ao priorizar a simplicidade e a clareza sobre a complexidade e a escalabilidade excessiva, as empresas podem criar software mais eficaz e mais fácil de gerenciar. Ele defende uma abordagem mais equilibrada que leve em consideração as reais necessidades dos usuários e os recursos disponíveis, em vez de buscar soluções que possam nunca ser usadas ou que complicam desnecessariamente o desenvolvimento.</p>
      </section>

      <section class="pb-8">
          <h2 class="text-2xl mb-4">Conclusão</h2>
          <p>As observações de Avery Pennarun sobre o estado atual do desenvolvimento de software oferecem uma perspectiva valiosa sobre as práticas predominantes na indústria. Sua crítica ao foco excessivo em escalabilidade e complexidade destaca a necessidade de uma abordagem mais pragmática e centrada nas necessidades reais dos usuários. À medida que o setor continua a evoluir, talvez seja hora de reconsiderar essas prioridades e buscar soluções que promovam a simplicidade, a eficiência e a satisfação dos desenvolvedores.</p>
      </section>`,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1001,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE777",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1002,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE888",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1003,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE999",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1004,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE999",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1005,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE10",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1006,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE11",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1007,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE12",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1008,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE13",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1009,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE14",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1010,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE15",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1011,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE16",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1012,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE17",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1013,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE18",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1014,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE19",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1015,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE20",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1016,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE21",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1017,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE22",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1018,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE23",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1019,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE24",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1020,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE25",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1021,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE26",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
  {
    id: 1022,
    imagem: "https://miro.medium.com/v2/resize:fit:1033/0*sedLR7F4ZWsaG-Nu.png",
    titulo: "TESTE27",
    descricao: "TESTE",
    mostrarDescricaoNaNoticia: true,
    tempoDeLeitura: 7,
    conteudoNoticia: `
      <h1> teste </h1>
    `,
    dataDePublicacao: new Date("08/15/2024"),
  },
];
