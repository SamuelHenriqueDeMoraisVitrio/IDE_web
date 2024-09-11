# IDE_web

## Editor Lua com Estilo Dark

Este projeto cria um editor de código Lua com um tema escuro, utilizando o Ace Editor. O editor é configurado para fornecer suporte a autocompletar funções e variáveis Lua, com sugestões adicionais pré-configuradas.

### Recursos

- Editor de código Lua estilizado com tema escuro
- Suporte a autocompletar para funções e variáveis Lua
- Sugestões adicionais pré-configuradas
- Configuração flexível através de um arquivo de constantes

### Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- `index.html`: Página principal que carrega o editor e inclui os scripts necessários.
- `js/consts.js`: Arquivo de constantes que define configurações do editor, o código inicial e sugestões de autocompletar.
- `js/main.js`: Arquivo principal que inicializa o editor e configura o autocompletar com base nas constantes definidas.
- `style/main.css`: Arquivo de estilos que define a aparência do editor e da página.

### Como Configurar

1. **Clone o Repositório**

   Clone este repositório para sua máquina local usando:

   ```bash
   git clone https://github.com/SamuelHenriqueDeMoraisVitrio/IDE_web.git
   ```

2. **Configuração do Tamanho do Editor**

  O tamanho do editor pode ser ajustado diretamente no arquivo index.html através da configuração de estilo inline no elemento div com o id editor.

  Exemplo:
  
  ```html
  <div id="editor" style="height: 400px; width: 600px;"></div>
  ```

  Ajuste os valores de **height** e **width** conforme necessário para definir o tamanho do editor.

3. **Configuração das Constantes**

  As constantes e configurações do editor estão definidas no arquivo **js/consts.js**. Aqui estão as principais constantes que você pode ajustar:

  **CURSOR_INIT_LINE**: Define a linha inicial do cursor quando o editor é carregado.
  **CONFIG_EDITOR**: Configurações do editor, incluindo tamanho da fonte, fonte, e outras opções.
  **INIT_CODE**: Código Lua inicial que é carregado no editor.
  **DEFAULT_SUGGESTIONS**: Sugestões de autocompletar pré-configuradas para o editor.

  Exemplo de configuração de **CONFIG_EDITOR**:
  ```javascript
  const CONFIG_EDITOR = {
    fontSize: "14pt",
    fontFamily: "Fira Code, monospace",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    highlightActiveLine: true,
    showPrintMargin: false,
    useSoftTabs: true,
    tabSize: 2
  };
  ```

  Ajuste essas configurações conforme necessário para personalizar o editor.

4. **Abrindo o Projeto**

  Após configurar o projeto, abra o arquivo **index.html** em um navegador para ver o editor em funcionamento.

  ```bash
  open index.html
  ```
  Ou, você pode usar um servidor local para visualizar o projeto.







