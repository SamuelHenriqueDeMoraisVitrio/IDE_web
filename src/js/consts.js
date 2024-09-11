const CURSOR_INIT_LINE = -1;

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

const INIT_CODE = `function include()

  documento = get_json("nome_decente.json")

  if(documento) then
    return true
  end
  
  local samu = "ss"
  
  print(samu);
  print(documento .. samu);

end
`;

const DEFAULT_SUGGESTIONS = [
  { caption: "print", value: 'print();', meta: "Função print" },
  { caption: "function ()", value: "function()\n\nend", meta: "Função anonima." },
  { caption: "function name()", value: "function name()\n\nend", meta: "Função anonima." },
  { caption: "if()", value: "if true then\n\nend", meta: "Condicional" },
  { caption: "return", value: "return --value", meta: "Retorno de função" },
  { caption: "get_json()", value: "get_json()", meta: "Pegar um json" }
];

