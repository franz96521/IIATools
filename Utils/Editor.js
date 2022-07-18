const vscode = require('vscode');

const editor = vscode.window.activeTextEditor;
function getSeletion() {
    return editor.document.getText(editor.selection);
}
function replaceSelection(newText) {

    editor.edit(editBuilder => {
        editBuilder.replace(editor.selection, newText);
    });
}
function messageBox(message) {
    vscode.window.showInformationMessage(message);

}

module.exports = { getSeletion, messageBox, replaceSelection };
