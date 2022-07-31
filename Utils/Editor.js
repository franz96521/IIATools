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
function createTerminalCMD(name) {
    var flag = false;
    vscode.window.terminals.forEach(terminal => {
        if (terminal.name === name) {
            flag = true;
            vscode.window.showInformationMessage("Terminal already exists");
        }
    });
    if (!flag) {
        vscode.window.createTerminal(name, 'CMD');
        vscode.window.showInformationMessage("Terminal created");
    }
}
function sendComandToTerminalCMD(comand, name) {
    createTerminalCMD(name);
    vscode.window.terminals.forEach(terminal => {
        if (terminal.name === name) {
            terminal.show(true);
            terminal.sendText(comand);
        }
    });
} function sendComandcurrentTerminal(comand) {
    vscode.window.activeTerminal.sendText(comand);
}

module.exports = { getSeletion, messageBox, replaceSelection, getCurrentFilePath, createTerminalCMD, sendComandToTerminalCMD, sendComandcurrentTerminal };
