const fs = require("fs");
const editor = require('../Editor');
const path = require('path')

function createFile(filepath) {
    fs.closeSync(fs.openSync(filepath, 'w'));
}
function gccRun() {
    var FilePath = editor.getCurrentFilePath();
    var directoryPath = path.dirname(FilePath)
    var filename = path.basename(FilePath);
    fs.exists(directoryPath + "/in.txt", function (exists) {
        if (!exists) {
            createFile(directoryPath + "/in.txt")
        }
    });
    fs.exists(directoryPath + "/out.txt", function (exists) {
        if (!exists) {
            createFile(directoryPath + "/out.txt")
        }
    });
    var runGcc = `(g++ ${FilePath} -o ${filename}.exe) && ( ${directoryPath}/${filename}.exe<${directoryPath}/in.txt> ${directoryPath}/out.txt)`;
    editor.sendComandToTerminalCMD(runGcc, "gcc");
}
module.exports = { gccRun };