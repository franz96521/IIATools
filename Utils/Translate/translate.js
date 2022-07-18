//module.js:
//a function that return translation of text from sourceLanguage to targetLanguage

const vscode = require('vscode');
const { translate } = require('bing-translate-api');
const editor = require('../Editor');



function translateText(text) {
  translate(text, null, 'en', true).then(res => {
   editor.replaceSelection(res.translation);

  }).catch(err => {
    console.error(err);
  });

}

module.exports = { translateText }
