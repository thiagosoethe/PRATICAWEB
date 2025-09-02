
function getEnunciado(secao, id) {
  if (ENUNCIADOS[secao] && ENUNCIADOS[secao][id]) {
    return ENUNCIADOS[secao][id];
  }
  if (id === 'exemplo') return 'Exemplo prático da estrutura';
  const n = id.replace('a', '');
  return `Atividade ${n} - Desenvolva sua solução aqui.`;
}

async function carregarCodigoReal(secao, id) {
  const pasta = SECOES[secao].pasta;
  let caminhos = [];
  
  if (id === 'exemplo') {
    caminhos = [
      `atividades/${pasta}/exemplo/index.html`,
      `atividades/${pasta}/exemplo/Index.html`
    ];
  } else {
    const numero = id.replace('a', '');
    caminhos = [
      `atividades/${pasta}/${numero.padStart(2, '0')}/index.html`,
      `atividades/${pasta}/${numero}/index.html`,
      `atividades/${pasta}/atividade ${numero}/index.html`
    ];
  }
  for (const caminho of caminhos) {
    try {
      const response = await fetch(caminho);
      if (response.ok) {
        let codigo = await response.text();
        console.log(`Código carregado de: ${caminho}`);
        const basePath = caminho.replace('/index.html', '');
        codigo = codigo.replace(/href="css\//g, `href="${basePath}/css/`);
        codigo = codigo.replace(/src="js\//g, `src="${basePath}/js/`);
        return codigo;
      }
    } catch (error) {
      console.log(`Tentativa falhou: ${caminho}`);
    }
  }
  console.log(`Nenhum arquivo encontrado para ${secao}/${id}, usando template padrão`);
  return getTemplate(secao, id);
}
function getTemplate(secao, id) {
  if (id === 'exemplo') {
    return TEMPLATES.exemplo.replace(/{titulo}/g, SECOES[secao].titulo);
  }
  const numero = id.replace('a', '');
  return TEMPLATES.atividade.replace(/{numero}/g, numero);
}
function selecionarAtividade(secao, id) {
  const lista = document.getElementById(`lista-${secao}`);
  if (lista) {
    [...lista.children].forEach(li => li.classList.remove('active'));
    const alvo = document.getElementById(`li-${secao}-${id}`);
    if (alvo) alvo.classList.add('active');
  }
  const enunciado = document.getElementById(`enun-${secao}`);
  if (enunciado) enunciado.textContent = getEnunciado(secao, id);
  const host = document.getElementById(`code-host-${secao}`);
  if (host) host.innerHTML = '';
}
async function verCodigo(secao, id) {
  selecionarAtividade(secao, id);
  const host = document.getElementById(`code-host-${secao}`);
  if (!host) return;
  const fileName = id === 'exemplo' ? `${secao}-exemplo.html` : `${secao}-atividade${id.replace('a', '')}.html`;
  host.innerHTML = `
    <div class="editor loading">
      <div class="editor-header">
        <div class="editor-tab">${fileName}</div>
      </div>
      <div class="editor-content" style="display: flex; align-items: center; justify-content: center; min-height: 400px;">
        <p style="color: #888;">Carregando código...</p>
      </div>
    </div>
  `;
  const code = await carregarCodigoReal(secao, id);
  const editor = document.createElement('div');
  editor.className = 'editor';
  editor.innerHTML = `
    <div class="editor-header">
      <div class="editor-tab">${fileName}</div>
    </div>
    <div class="editor-main">
      <div class="editor-content">
        <form>
          <textarea name="fonte">${code}</textarea>
        </form>
      </div>
    </div>
    <div class="editor-footer">
      <button type="button" class="btn-test" onclick="executarCodigo('${secao}', '${id}')">▶ Executar</button>
      <span style="color: #858585; font-size: 0.8rem;">Código Real da Atividade - Clique em Executar para visualizar</span>
    </div>
  `;
  host.innerHTML = '';
  host.appendChild(editor);
  editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
async function executarCodigo(secao, id) {
  const pasta = SECOES[secao].pasta;
  let caminhosPossiveis = [];
  
  if (id === 'exemplo') {
    caminhosPossiveis = [
      `atividades/${pasta}/exemplo/index.html`,
      `atividades/${pasta}/exemplo/Index.html`
    ];
  } else {
    const numero = id.replace('a', '');
    caminhosPossiveis = [
      `atividades/${pasta}/${numero.padStart(2, '0')}/index.html`,
      `atividades/${pasta}/${numero}/index.html`,
      `atividades/${pasta}/atividade ${numero}/index.html`
    ];
  }
  let caminhoEncontrado = null;
  for (const caminho of caminhosPossiveis) {
    try {
      const response = await fetch(caminho, { method: 'HEAD' });
      if (response.ok) {
        caminhoEncontrado = caminho;
        break;
      }
    } catch (error) {
    }
  }
  
  if (caminhoEncontrado) {
    window.location.href = caminhoEncontrado;
  } else {
    window.location.href = caminhosPossiveis[0];
  }
}
function montarTelaEstrutura(secao) {
  const conf = SECOES[secao];
  if (!conf) return '<div class="card"><p>Seção não encontrada.</p></div>';
  let itens = `
    <li id="li-${secao}-exemplo" class="active" onclick="selecionarAtividade('${secao}','exemplo')">
      <span>Exemplo</span>
      <button class="ver" onclick="verCodigo('${secao}','exemplo');event.stopPropagation()">Ver código</button>
    </li>
  `;
  for (let i = 1; i <= conf.qtd; i++) {
    itens += `
      <li id="li-${secao}-a${i}" onclick="selecionarAtividade('${secao}','a${i}')">
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
            ${getEnunciado(secao, 'exemplo')}
          </div>
          <div class="meta">
            Selecione uma atividade e clique em <b>"Ver código"</b> para abrir o editor.
          </div>
          <div id="code-host-${secao}"></div>
        </section>
      </div>
    </section>
  `;
}
function abrirSecao(secao) {
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const alvo = document.querySelector(`.nav-link[href="javascript:abrirSecao('${secao}')"]`);
  if (alvo) alvo.classList.add('active');
  const app = document.getElementById('app');
  if (secao === 'home') {
    app.innerHTML = `
      <h1 class="title">Estruturas da Web: HTML, CSS e JavaScript</h1>
      <div class="card">
        <p>Repositório de atividades de programação desenvolvidas em HTML, CSS e JavaScript. 
        Uma base de conhecimento para consultas futuras e aprendizado de estruturas fundamentais.</p>
      </div>
    `;
    return;
  }
  if (SECOES[secao]) {
    app.innerHTML = montarTelaEstrutura(secao);
    return;
  }
  app.innerHTML = `<div class="card"><p>Conteúdo em construção...</p></div>`;
}
const SECOES = {
  'cond-se': { titulo: 'Estrutura Condicional Se', pasta: 'if', qtd: 2 },
  'cond-caso': { titulo: 'Estrutura Condicional Caso', pasta: 'switch', qtd: 2 },
  'rep-enquanto': { titulo: 'Estrutura de Repetição Enquanto', pasta: 'while', qtd: 3 },
  'rep-facaEnquanto': { titulo: 'Estrutura de Repetição Faça Enquanto', pasta: 'do_while', qtd: 3 },
  'rep-para': { titulo: 'Estrutura de Repetição Para', pasta: 'for', qtd: 1 },
  'vet-uni': { titulo: 'Vetores Unidimensionais', pasta: 'vector', qtd: 4 },
  'vet-bi': { titulo: 'Vetores Bidimensionais', pasta: 'matriz', qtd: 4 }
};
const ENUNCIADOS = {
  'cond-se': {
    'a1': 'Validação de campos de formulários - Estrutura SE (if). Calcule a média de 3 notas e determine a situação do aluno.',
    'a2': 'Aplicação para comparar dois números e informar qual é maior ou se são iguais.'
  },
  'cond-caso': {
    'a1': 'Estrutura SWITCH - Classificação por idade. Sistema que classifica pessoas em faixas etárias.',
    'a2': 'Calculadora simples usando estrutura SWITCH com as quatro operações básicas.'
  },
  'rep-enquanto': {
    'a1': 'Algoritmo que leia 3 números e imprima seu somatório usando estrutura WHILE.',
    'a2': 'Programa que leia 3 números inteiros e informe qual foi o maior número lido.',
    'a3': 'Sistema que leia 3 números inteiros positivos e exiba a soma dos números divisíveis por 5.'
  },
  'rep-facaEnquanto': {
    'a1': 'Algoritmo que leia quantos números o usuário desejar e imprima o somatório (digite 0 para finalizar).',
    'a2': 'Programa para gerar a tabuada de um número digitado pelo usuário usando DO-WHILE.',
    'a3': 'Foi desenvolvido um sistema em que escreva o total de alunos por turma e sera mostrado se a media é superior ou igual a 7 e a media geral da turma.'
  },
  'rep-para': {
    'a1': 'Implementação de contador ou laço usando estrutura FOR.'
  },
  'vet-uni': {
    'a1': 'Algoritmo para ler notas de alunos e exibir relatório das notas iguais ou superiores a 7,5.',
    'a2': 'Relatório de notas ≥ 7,5 com contador de quantas notas atendem ao critério.',
    'a3': 'Programa para gerar vetor de 10 posições onde cada elemento é o quadrado de sua posição.',
    'a4': 'Sistema para alimentar vetor com 10 números reais e exibir números em posições ímpares.'
  },
  'vet-bi': {
    'a1': 'Sistema para alimentar matriz (3x3) de valores inteiros e multiplicar por um valor do usuário.',
    'a2': 'Algoritmo para ler matriz (2x2) de inteiros e imprimir soma dos elementos de uma linha.',
    'a3': 'Programa que cria matriz (2x2) onde cada elemento é a soma dos índices de sua posição.',
    'a4': 'Sistema para criar, alimentar e imprimir dados de uma matriz 2x3.'
  }
};
const TEMPLATES = {
  exemplo: `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exemplo - {titulo}</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; }
        input, button { padding: 8px; margin: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>{titulo}</h2>
        <p>Este é um exemplo de {titulo}</p>
        
        <script>
            // Exemplo de código JavaScript
            console.log("Exemplo funcionando!");
        </script>
    </div>
</body>
</html>`,

  atividade: `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Atividade {numero}</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; }
        input, button { padding: 8px; margin: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Atividade {numero}</h2>
        
        <script>
            // Escreva seu código aqui
            
        </script>
    </div>
</body>
</html>`
};
abrirSecao('home');