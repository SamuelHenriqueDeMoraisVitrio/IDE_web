const editors = document.querySelectorAll('.ace-editor');
const aceEditors = [];

editors.forEach((element, index) => {
    const editor = ace.edit(element.id);

    editor.session.setMode("ace/mode/lua");
    editor.setTheme("ace/theme/monokai");
    editor.setOptions(CONFIG_EDITOR);

    editor.setValue(INIT_CODE, CURSOR_INIT_LINE);

    editor.session.on('change', function() {
        updateScope();
    });

    aceEditors.push(editor);
});

const scope = {
    functions: {},
    variables: {}
};

function updateScope() {
    aceEditors.forEach(editor => {
        const code = editor.getValue();

        const functionMatches = code.match(/function\s+(\w+)/g) || [];
        const variableMatches = code.match(/(?:local\s+|[\w]+\s*=\s*)(\w+)/g) || [];

        scope.functions = {};
        scope.variables = {};

        functionMatches.forEach(match => {
            const functionName = match.split(/\s+/)[1];
            scope.functions[functionName] = functionName;
        });

        variableMatches.forEach(match => {
            const variableName = match.split(/\s+/)[1] || match;
            scope.variables[variableName] = variableName;
        });
    });
}

const customCompleter = {
    getCompletions: function(editor, session, pos, prefix, callback) {
        updateScope();

        const suggestions = [
            ...Object.keys(scope.functions).map(name => ({
                caption: name,
                value: name + "()",
                meta: "Função Lua"
            })),
            ...Object.keys(scope.variables).map(name => ({
                caption: name,
                value: name,
                meta: "Variável Lua"
            })),
            ...DEFAULT_SUGGESTIONS
        ];
        
        callback(null, suggestions);
    }
};

aceEditors.forEach(editor => {
    editor.completers = [customCompleter];
});
