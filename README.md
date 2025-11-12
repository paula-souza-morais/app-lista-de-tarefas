## Lista de Tarefas!

Aplicativo simples de lista de tarefas feito com HTML, CSS, JavaScript e Electron.
Permite adicionar, marcar como concluídas e excluir tarefas, tudo fica salvo localmente no seu computador.

## Como usar =
- Digite uma tarefa no campo de texto;
- Clique no botão `+` para adicionar;
- Clique na tarefa para marcar como concluída;
- Clique no `×` para remover.

## Rodando como aplicativo de desktop = 
Este projeto também pode ser executado como um app de desktop usando [Electron](https://www.electronjs.org/).

### Passos = 
1. Clone o repositório:
   git clone https://github.com/paula-souza-morais/app-lista-de-tarefas.git
2. Instale as dependências:
    npm install
3. Execute o app:
    npm start
   
Ou, se quiser, crie um executável com:
npx electron-packager . "Lista de Tarefas" --platform=win32 --arch=x64 --out=dist

## Como foi feito =

**Tecnologias usadas:**
- HTML5;
- CSS3;
- JavaScript;  
- Electron (para transformar em aplicativo desktop);

O projeto começou como um simples app web de lista de tarefas e foi adaptado para o **Electron**, criando uma versão que pode ser executada como programa no Windows, com ícone, menu personalizado e botões próprios de fechar/minimizar.


## Lições aprendidas =

Aprendi como o Electron conecta o front-end com o Node.js pra criar apps desktop reais.  
Também entendi melhor como manipular janelas, criar botões customizados e empacotar projetos pra distribuição.

## Preview =
![Lista de Tarefas](images/preview.png)
