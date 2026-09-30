//módulo para manipulação de arquivos
const fs = require('fs').promises;


const path = require('path');

// lê os arquivos da pasta atual
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walkFiles(files ,rootDir);
}

async function walkFiles(files, rootDir) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        // ignora arquivos .git
        if (/\.git/g.test(fileFullPath)) continue;
        // ignora a pasta node_modules
        if (/node_modules/.test(fileFullPath)) continue;
        // pega somente os arquivos .js
        if (!(/\.js$/g.test(fileFullPath))) continue;
        
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        console.log(fileFullPath);
    }
}

readdir();