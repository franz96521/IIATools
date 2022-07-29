// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const translate = require('./Utils/Translate/translate');
const editor = require('./Utils/Editor');
const tts = require('./Utils/TTS/tts');
const cpp = require('./Utils/cpp/cpp');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copilottranslate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('copilottranslate.translateSelection', function () {
		const selectedText = editor.getSeletion();
		translate.translateText(selectedText);
	});
	let TTS = vscode.commands.registerCommand('copilottranslate.TTS', function () {
		const selectedText = editor.getSeletion();

		editor.messageBox(tts.getTTSLink(selectedText));
	});
	let gcc = vscode.commands.registerCommand('copilottranslate.gcc', function () {
		cpp.gccRun();
		//editor.messageBox(editor.getCurrentFilePath());
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
