/* ====== Códigos por atividade (mostrados no bloco <pre>) ====== */
const codigos = {
    exemplo: `&lt;html&gt;
    &lt;body&gt;
  
      &lt;script&gt;
        const idade = Number(prompt('Qual sua idade?'));
        if(idade &gt;= 18){
          alert('Você é maior de idade.');
        }else{
          alert('Você é menor de idade.');
        }
      &lt;/script&gt;
  
    &lt;/body&gt;
  &lt;/html&gt;`,
    a1:`&lt;html&gt;
    &lt;body&gt;
      Página HTML
  
      &lt;script type="text/javascript"&gt;
        /* escreva seu código aqui */
        const numero = Number(prompt('Digite um número:'));
        if(numero % 2 === 0){
          alert('Par');
        } else {
          alert('Ímpar');
        }
      &lt;/script&gt;
  
    &lt;/body&gt;
  &lt;/html&gt;`,
    a2:`/* Código da Atividade 2 (exemplo) */`,
    a3:`/* Código da Atividade 3 (exemplo) */`,
    a4:`/* Código da Atividade 4 (exemplo) */`,
    a5:`/* Código da Atividade 5 (exemplo) */`,
    a6:`/* Código da Atividade 6 (exemplo) */`
  };
  
  /* ====== Texto explicativo (direita) ====== */
  function explicacao(id){
    if(id==='exemplo'){
      return `
        “Neste primeiro exercício aprendemos a usar a estrutura SE para
        validar campos de respostas em um formulário. Desta forma, se o
        usuário não preencher um campo, aparecerá um alerta pedindo para
        ele preenchê-lo.”`;
    }
    return `“Explicação do assunto”`;
  }
  
  /* ====== HTML do editor (EXATO como no seu print) ====== */
  const IFRAME_EDITOR_HTML = `
  <html>
    <head>
      <title>Teste seu código HTML</title>
      <meta charset="UTF-8">
      <meta name="Autor" content="Fábio Borges de Oliveira">
    </head>
    <!--Abrindo a tag body da página principal, colocando a cor cinza para o corpo da página-->
    <body bgcolor="#CCCCCC">
        <center>
       
        <form>
          <br>
          <textarea name="fonte" cols="70" rows="20">
        <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Estrutura de JavaScript</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    /* Configurações gerais */
    body { font-family: Arial, sans-serif; }
    section { margin: 0 auto; }

    /* Configurações do cabeçalho / formulário */
    .cadmediaaluno1 {
      width: 300px;
      margin: 0 auto;
      margin-bottom: 10px;
      font-weight: bold;
      border: 1px solid #ccc;
      padding: 12px 12px 16px;
      border-radius: 6px;
    }

    .cadmediaaluno1 input {
      margin: 5px 0;
      width: 100%;
      padding: 6px 8px;
      box-sizing: border-box;
    }

    .cadmediaaluno1 button {
      width: 30%;
      margin: 0 10%;
      background-color: #b1ccf5;
      font-weight: bold;
      font-size: 16px;
      padding: 6px 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    label { float: left; }

    h2 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 32px; /* mantido grande, ajuste se quiser */
    }
  </style>
</head>
<body>
  <section>
    <h2>Atividade - Ler 2 Número... Estrutura condicional "se" (if)</h2>

    <form name="fmrnotas" action="#" method="get" onsubmit="return procFormulario()">
      <fieldset class="cadmediaaluno1">
        <legend>Dados pessoais</legend>

        <label for="num1">Nota 1</label>
        <input type="text" name="txtnum1" id="num1" />

        <br><br>

        <label for="num2">Nota 2</label>
        <input type="text" name="txtnum2" id="num2" />

        <br><br>

        <button type="reset">Limpar</button>
        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  </section>

  <script>
    function procFormulario() {
      // Referência do formulário
      const f = document.forms['fmrnotas'];

      // Valores brutos (como texto)
      const v1 = f.txtnum1.value.trim();
      const v2 = f.txtnum2.value.trim();

      // Validação de campos vazios
      if (v1 === "") {
        alert("Preencha o campo nota 1");
        f.txtnum1.focus();
        return false;
      }
      if (v2 === "") {
        alert("Preencha o campo nota 2");
        f.txtnum2.focus();
        return false;
      }

      // Converter para número (aceita vírgula como decimal)
      const n1 = parseFloat(v1.replace(',', '.'));
      const n2 = parseFloat(v2.replace(',', '.'));

      if (isNaN(n1)) {
        alert("Nota 1 inválida");
        f.txtnum1.focus();
        return false;
      }
      if (isNaN(n2)) {
        alert("Nota 2 inválida");
        f.txtnum2.focus();
        return false;
      }

      // Comparação
      if (n1 > n2) {
        alert("número 1 maior que número 2");
      } else if (n2 > n1) {
        alert("número 2 maior que número 1");
      } else {
        alert("as notas são iguais");
      }

      // Impede envio e recarregamento da página
      return false;
    }
  </script>
</body>
</html>

      </script>
  
    </body>
  </html>
          </textarea>
          <!--Finalizando o componente textarea-->
          <br><br>
          <input type="button" value="Testar sua página" onclick="document.write(fonte.value);">
        </form>
      </center>
    </body>
  </html>
  `;
  
  /* ====== Navegação simples ====== */
  function abrirSecao(secao){
    document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
    const alvo = document.querySelector(`.nav-link[href="javascript:abrirSecao('${secao}')"]`);
    if(alvo){ alvo.classList.add('active'); }
  
    if(secao === 'home'){
      document.getElementById('app').innerHTML = `
        <h1 class="title">Landing page</h1>
        <div class="card panel"><p class="muted">
          Passe o mouse nos menus e clique para abrir um assunto.
        </p></div>
      `;
      return false;
    }
  
    if(secao === 'cond-se'){
      renderCondSe();
      return false;
    }
  
    document.getElementById('app').innerHTML = `
      <h1 class="title">Em construção</h1>
      <div class="card panel"><p class="muted">“Explicação do assunto”</p></div>
    `;
    return false;
  }
  
  /* ====== Página: Estrutura Condicional SE ====== */
  function renderCondSe(){
    document.getElementById('app').innerHTML = `
      <h1 class="title">Estrutura Condicional SE</h1>
      <div class="grid">
        <aside class="card side">
          <div class="head">Atividades</div>
          <div class="list" id="listaAtividades">
            <button class="item" data-act="exemplo" aria-current="true" onclick="selecionarAtividade(this)">
              <span>Exemplo</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('exemplo')">Ver código</span>
            </button>
            <button class="item" data-act="a1" onclick="selecionarAtividade(this)">
              <span>Atividade 1</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('a1')">Ver código</span>
            </button>
            <button class="item" data-act="a2" onclick="selecionarAtividade(this)">
              <span>Atividade 2</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('a2')">Ver código</span>
            </button>
            <button class="item" data-act="a3" onclick="selecionarAtividade(this)">
              <span>Atividade 3</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('a3')">Ver código</span>
            </button>
            <button class="item" data-act="a4" onclick="selecionarAtividade(this)">
              <span>Atividade 4</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('a4')">Ver código</span>
            </button>
            <button class="item" data-act="a5" onclick="selecionarAtividade(this)">
              <span>Atividade 5</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('a5')">Ver código</span>
            </button>
            <button class="item" data-act="a6" onclick="selecionarAtividade(this)">
              <span>Atividade 6</span>
              <span class="cta" onclick="event.stopPropagation(); verCodigo('a6')">Ver código</span>
            </button>
          </div>
        </aside>
  
        <section id="conteudo" class="card panel">
          <p class="muted">“Explicação do assunto”</p>
        </section>
      </div>
    `;
  }
  
  /* seleciona atividade e mostra apenas explicação */
  function selecionarAtividade(botao){
    if(!botao){ alert("Selecione uma atividade."); return false; }
    let itens = document.querySelectorAll('#listaAtividades .item');
    for(let i=0;i<itens.length;i++){ itens[i].removeAttribute('aria-current'); }
    botao.setAttribute('aria-current','true');
    document.getElementById('conteudo').innerHTML = `<p class="muted">“Explicação do assunto”</p>`;
    return false;
  }
  
  /* mostra o layout com código (2ª imagem) */
  function verCodigo(id){
    if(!id){ alert("Atividade inválida."); return false; }
    if(!(id in codigos)){ alert("Código não disponível para esta atividade."); return false; }
  
    let titulo = (id === 'exemplo') ? 'Exemplo' : ('Atividade ' + id.replace('a',''));
    document.getElementById('conteudo').innerHTML = `
      <div class="content-2col">
        <div>
          <div class="activity-banner">
            ${titulo}
            <div class="floating">
              <button class="btn" onclick="executar('${id}')">Executar Página</button>
            </div>
          </div>
          <div class="card soft" style="padding:18px;">
            <pre>${codigos[id]}</pre>
          </div>
  
          <!-- SANDBOX: onde o editor será injetado quando clicar em Executar -->
          <div id="sandbox" class="card panel" style="margin-top:14px; display:none">
            <iframe id="sandboxFrame" class="exec-iframe"></iframe>
          </div>
        </div>
  
        <section class="card panel"><p class="muted">${explicacao(id)}</p></section>
      </div>
    `;
    return false;
  }
  
  /* ====== Executa na MESMA PÁGINA: injeta o editor no iframe ====== */
  function executar(id){
    const box = document.getElementById('sandbox');
    const frame = document.getElementById('sandboxFrame');
    if(!box || !frame){
      alert('Área de execução não encontrada.');
      return false;
    }
    box.style.display = 'block';                 // revela a área de execução
    const doc = frame.contentWindow.document;    // escreve DENTRO do iframe
    doc.open();
    doc.write(IFRAME_EDITOR_HTML);               // editor com textarea + botão (document.write)
    doc.close();
    return false;
  }
  
  /* inicia na home */
  abrirSecao('home');
  