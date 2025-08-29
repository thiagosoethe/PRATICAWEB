/* ========= NAV ========= */
function marcarLinkAtivo(secao){
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const alvo = document.querySelector(`.nav-link[href="javascript:abrirSecao('${secao}')"]`);
  if (alvo) alvo.classList.add('active');
}

/* ========= CONFIG ========= */
const CONF_SECOES = {
  'cond-se':          { titulo: 'Estrutura Condicional Se',             qtd: 2 },
  'cond-caso':        { titulo: 'Estrutura Condicional Caso',           qtd: 2 },
  'rep-enquanto':     { titulo: 'Estrutura de Repetição Enquanto',      qtd: 3 },
  'rep-facaEnquanto': { titulo: 'Estrutura de Repetição Faça Enquanto', qtd: 3 },
  'rep-para':         { titulo: 'Estrutura de Repetição Para',          qtd: 1 },
  'vet-uni':          { titulo: 'Vetores Unidimensionais',              qtd: 4 },
  'vet-bi':           { titulo: 'Vetores Bidimensionais',               qtd: 4 },
};

const ENUNCIADOS = {
  'cond-se': {
    'a1':'Foi Desenvolvido uma aplicação web que, a partir de 3 notas de um aluno, informadas pelo usuário, calcule a sua média e de acordo com a mesma emita a situação do aluno: "Aprovado", "Recuperação" ou "Reprovado".. Lembrando que a média para aprovação é a de 7 ou maior e entre 5 e 6,9 o aluno está em recuperação e abaixo disso, reprovado.',
    'a2':'Foi Desenvolvido uma aplicação web para ler dois números por exemplo: numero1 e numero 2. Em seguida, diga se o numero1 > numero 2 ou se numero2 > numero1 ou ainda se numero 1 = numero2',
  },
  'cond-caso': { 'a1':'-', 'a2':'-' },
  'rep-enquanto': {
    'a1': 'Foi desenvolvido um algoritmo que leia 3 números e imprima seu somatório',
    'a2': 'Foi desenvolvido um algoritmo que leia 3 números inteiro e falar qual foi maior numero lido',
    'a3': 'Foi desenvolvido um sistema que leia 3 números inteiro positivo e depois exibir a soma dos números que são divisíveis por 5.'
  },
  'rep-facaEnquanto': {
    'a1': 'foi desenvolvido um algoritmo que leia quantos números que o usuário deseja informar e imprima seu somatório e para finalizar a estrutura digite 0...',
    'a2': 'Foi desenvolvido um programa para escrever a tabuada de um numero digitado pelo usuário.',
    'a3': 'Foi desenvolvido um sistema em que escreva o total de alunos por turma e mostre a media superior ou igual a 7 e a media geral da turma.'
  },
  'rep-para': { 'a1':'-' },
  'vet-uni': {
    'a1':'Foi desenvolvido um algoritmo para ler as notas obtidas pelos alunos, e depois exibir um relatório das notas iguais ou superiores a 7,5.',
    'a2':'Foi desenvolvido um algoritmo para ler as notas obtidas pelos alunos, e depois exibir um relatório das notas iguais ou superiores a 7,5 e também no final a quantidade de notas igual ou superior a 7,5',
    'a3':'Foi desenvolvido um programa para gerar um vetor de 10 posições, onde cada elemento corresponde ao quadrado de sua posição. e imprima depois os dados armazenados no vetor',
    'a4':'foi desenvolvido um programa para alimentar um vetor com 10 números reais e depois exibir os números localizados nas posições impares.',
  },
  'vet-bi': {
    'a1':'Foi desenvolvido um sistema para alimentar uma matriz (3x3) de valores inteiros, multiplicando essa matriz por um valor informado pelo usuário e escrevendo o conteúdo da matriz multiplicada.',
    'a2':'Foi desenvolvido um sistema que construa um algoritmo para ler uma matriz (2x2) de inteiros e imprimir a soma dos elementos de uma linha fornecida pelo usuário',
    'a3':'Foi desenvolvido um programa que crie uma matriz (2x2) onde o valor de cada elemento dentro da matriz é a soma dos índices da sua posição',
    'a4':'Foi desenvolvido um sistema que criar, alimentar e imprimir os dados de uma matriz 2 x 3',
  },
};

/* ========= AUX ========= */
function getEnunciado(secao, id){
  if (ENUNCIADOS[secao] && ENUNCIADOS[secao][id]) return ENUNCIADOS[secao][id];
  if (id === 'exemplo') return 'EXEMPLO';
  const n = id.replace('a','');
  return `Enunciado da Atividade ${n} (troque depois).`;
}

function selecionarAtividade(secao, id){
  const lista = document.getElementById(`lista-${secao}`);
  if (!lista) return;
  [...lista.children].forEach(li => li.classList.remove('active'));
  const alvo = document.getElementById(`li-${secao}-${id}`);
  if (alvo) alvo.classList.add('active');

  const box = document.getElementById(`enun-${secao}`);
  if (box) box.textContent = getEnunciado(secao, id);
}

/* ========= MOSTRAR FORM DO HTML ========= */
/* Pega o template do banco (#editors-bank) e injeta um clone (sem id)
   dentro do painel da seção, quando clicar em “Ver código”. */
function verCodigo(secao, id){
  selecionarAtividade(secao, id);

  const host = document.getElementById(`code-host-${secao}`);
  if (!host) return;

  const tpl = document.getElementById(`editor-${secao}-${id}`);
  host.innerHTML = '';
  if (tpl){
    // injeta uma cópia sem o id (para evitar ids duplicados)
    const wrapper = document.createElement('div');
    wrapper.className = 'editor';
    wrapper.innerHTML = tpl.innerHTML;
    host.appendChild(wrapper);
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    host.innerHTML = `<div class="card"><p>Editor não encontrado para ${secao} / ${id}.</p></div>`;
  }
}

/* ========= TELA DAS SEÇÕES ========= */
function montarTelaEstrutura(secao){
  const conf = CONF_SECOES[secao];
  if (!conf) return '<div class="card"><p>Seção não encontrada.</p></div>';

  let itens = `
    <li id="li-${secao}-exemplo" class="active"
        onclick="selecionarAtividade('${secao}','exemplo')">
      <span>Exemplo</span>
      <button class="ver" onclick="verCodigo('${secao}','exemplo');event.stopPropagation()">Ver código</button>
    </li>
  `;
  for (let i = 1; i <= conf.qtd; i++){
    itens += `
      <li id="li-${secao}-a${i}"
          onclick="selecionarAtividade('${secao}','a${i}')">
        <span>Atividade ${i}</span>
        <button class="ver" onclick="verCodigo('${secao}','a${i}');event.stopPropagation()">Ver código</button>
      </li>
    `;
  }

  return `
    <section class="pagina-estrutura">
      <h2 class="topo-estrutura">${conf.titulo}</h2>

      <div class="grid-estrutura">
        <aside class="sidebar" aria-label="Atividades">
          <h3>Atividades</h3>
          <ul class="lista-atividades" id="lista-${secao}">
            ${itens}
          </ul>
        </aside>

        <section class="painel">
          <div class="enunciado" id="enun-${secao}">
            ${getEnunciado(secao,'exemplo')}
          </div>
          <div class="meta">
            Selecione uma atividade e clique em <b>“Ver código”</b> para abrir o formulário desta atividade.
          </div>

          <!-- Aqui o form correspondente é inserido -->
          <div id="code-host-${secao}"></div>
        </section>
      </div>
    </section>
  `;
}

/* ========= ROUTER ========= */
function abrirSecao(secao) {
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const alvo = document.querySelector(`.nav-link[href="javascript:abrirSecao('${secao}')"]`);
  if (alvo) alvo.classList.add('active');

  if (secao === 'home') {
    document.getElementById('app').innerHTML = `
      <h1 class="title">Conceitos Sobres Estruturas em Html, Css, e Javascript</h1>
      <div class="card">
        <p>Baseado nos conhecimentos fundamentais em HTML, CSS e JavaScript, foi desenvolvido uma solução de um site sirva como um repositório de atividades propostas de programação desenvolvidas em HTML, CSS e JavaScript servindo de base para futuras consultas quando houver necessidade ou também para pessoas que estejam em processo de aprendizagem.</p>
      </div>
    `;
    return;
  }

  if (CONF_SECOES[secao]) {
    document.getElementById('app').innerHTML = montarTelaEstrutura(secao);
    return;
  }

  document.getElementById('app').innerHTML = `<div class="card"><p>Conteúdo em construção...</p></div>`;
}

/* boot */
abrirSecao('home');
