const ENUNCIADOS = {
  'cond-se': {
    'a1':'-',
    'a2':'-',
  },
  'cond-caso': {
    'a1':'-',
    'a2':'-',
  },
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
  'rep-para': {
    'a1':'-',
  },
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

// ===== Utilitários =====
function marcarLinkAtivo(secao){
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const alvo = document.querySelector(`.nav-link[href="javascript:abrirSecao('${secao}')"]`);
  if (alvo) alvo.classList.add('active');
}

function getEnunciado(secao, id){
  // se houver enunciado específico, usa ele
  if (ENUNCIADOS[secao] && ENUNCIADOS[secao][id]) {
    return ENUNCIADOS[secao][id];
  }
  // padrão
  if (id === 'exemplo') return 'Enunciado do EXEMPLO desta estrutura.';
  const n = id.replace('a','');
  return `Enunciado da Atividade ${n} (troque depois).`;
}

// muda o enunciado ao clicar na lista
function selecionarAtividade(secao, id){
  const lista = document.getElementById(`lista-${secao}`);
  if (!lista) return;
  [...lista.children].forEach(li => li.classList.remove('active'));
  const alvo = document.getElementById(`li-${secao}-${id}`);
  if (alvo) alvo.classList.add('active');

  const box = document.getElementById(`enun-${secao}`);
  if (box) box.textContent = getEnunciado(secao, id);
}

// placeholder para “Ver código”
function verCodigo(secao, id){
  alert(`Você ligará aqui o código de: [${secao}] > [${id}].\n(placeholder)`);
}

// monta a tela no formato do seu print
function montarTelaEstrutura(secao){
  const conf = CONF_SECOES[secao];
  if (!conf) return '<div class="card"><p>Seção não encontrada.</p></div>';

  // lista: Exemplo + N atividades
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

  // layout
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
            Selecione uma atividade à esquerda. O botão <b>“Ver código”</b> vai direcionar ao codigo da proposta.
          </div>
        </section>
      </div>
    </section>
  `;
}

// ===== Roteamento no seu padrão =====
function abrirSecao(secao) {
  // remove active e marca o atual
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

  // usa o mesmo layout para todas as estruturas, variando a quantidade
  if (CONF_SECOES[secao]) {
    document.getElementById('app').innerHTML = montarTelaEstrutura(secao);
    return;
  }

  // fallback
  document.getElementById('app').innerHTML = `<div class="card"><p>Conteúdo em construção...</p></div>`;
}

// inicia na home
abrirSecao('home');
// ===== Configuração de quantidades por seção =====
const CONF_SECOES = {
  'cond-se':          { titulo: 'Estrutura Condicional Se',             qtd: 2 },
  'cond-caso':        { titulo: 'Estrutura Condicional Caso',           qtd: 2 },
  'rep-enquanto':     { titulo: 'Estrutura de Repetição Enquanto',      qtd: 3 },
  'rep-facaEnquanto': { titulo: 'Estrutura de Repetição Faça Enquanto', qtd: 3 },
  'rep-para':         { titulo: 'Estrutura de Repetição Para',          qtd: 1 }, // ajuste se quiser mais
  'vet-uni':          { titulo: 'Vetores Unidimensionais',              qtd: 4 },
  'vet-bi':           { titulo: 'Vetores Bidimensionais',               qtd: 4 },
};
