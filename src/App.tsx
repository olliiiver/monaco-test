import React from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';

class Editor extends React.Component {

  constructor(props:any) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }

  editorWillMount(m:any) {
    monaco.editor.createModel('', "json");
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        enableSchemaRequest: false,
        allowComments: false
    });
    m.editor.createModel('', "json");
    m.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      enableSchemaRequest: false,
      allowComments: false
    });
  }

  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="json"
        theme="vs-dark"
        options={options}
        editorWillMount={this.editorWillMount}
      />
    );
  }
}

function App() {
  return (
      <Editor />
  );
}

export default App;
