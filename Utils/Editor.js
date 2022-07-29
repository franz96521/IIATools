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
function getCurrentFilePath() {
    return editor.document.uri.fsPath;
}
function createTerminal(name) {
    var flag = false;
    vscode.window.terminals.forEach(terminal => {
        if (terminal.name === name) {
            terminal.sendText("cd");
            flag = true;
            vscode.window.showInformationMessage("Terminal already exists");
        }
    });
    if (!flag) {
        vscode.window.createTerminal(name);
        vscode.window.showInformationMessage("Terminal created");
    }
}
function sendComandToTerminal(comand, name) {
    createTerminal(name);
    vscode.window.terminals.forEach(terminal => {
        if (terminal.name === name) {
            terminal.sendText(comand);
        }
    });
}

module.exports = { getSeletion, messageBox, replaceSelection, getCurrentFilePath, createTerminal, sendComandToTerminal };
