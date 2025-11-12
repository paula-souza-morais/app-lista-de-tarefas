## Lista de Tarefas!

Aplicativo simples de lista de tarefas feito com HTML, CSS, JavaScript e Electron.
Permite adicionar, marcar como concluídas e excluir tarefas, tudo fica salvo localmente no seu computador.
Desenvolvido para rodar como **app de desktop** (Windows).

## Como usar =
- Digite uma tarefa no campo de texto;
- Clique no botão `+` para adicionar;
- Clique na tarefa para marcar como concluída;
- Clique no `×` para remover.

## Como executar = 
(você precisa ter o node.js já instalado, se não tiver instala por aqui: [nodejs.org](https://nodejs.org/pt/download))
1. Clone o repositório:
   git clone https://github.com/paula-souza-morais/app-lista-de-tarefas.git
   cd app-lista-de-tarefas
2. Instale as dependências:
   npm install
3. Inicie o aplicativo:
   npx electron .
O app abrirá em uma janela de desktop usando o Electron.
   
## Como gerar o executável (Windows) =

Se quiser criar o .exe:
npx electron-packager . "Lista de Tarefas" --platform=win32 --arch=x64 --icon=images/icone.ico --out=dist

## Como foi feito =

**Tecnologias usadas:**
- HTML5;
- CSS3;
- JavaScript;  
- Electron (para transformar em aplicativo desktop);

## Lições aprendidas =

Aprendi como o Electron conecta o front-end com o Node.js pra criar apps desktop reais.  
Também entendi melhor como manipular janelas, criar botões customizados e empacotar projetos pra distribuição.

## Preview =
![Lista de Tarefas](images/preview.png)
