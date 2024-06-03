#!/usr/bin/env node

let { program } = require("commander");
let { readFileSync, readdirSync, writeFileSync } = require("fs");
let path = require('path');

program.command('prebuild')
  .description('发布之前执行的hook')
  .action(() => {
    appendJSToMD(__dirname)
  })

program.parse();

function appendJSToMD(dirPath) {
  let currentDirName = path.basename(dirPath)
  let dirInfoList = readdirSync(dirPath, { withFileTypes: true });
  // 该文件夹下面有index.js 或者dirname.js 同时该文件下面有index.md
  let files = dirInfoList.filter(item => item.isFile());
  let dirs = dirInfoList.filter(item => item.isDirectory());
  let origin = null, destination = null;
  files.forEach(item => {
    if (['index.md', `${currentDirName}.md`].includes(item.name)) {
      destination = item
      return;
    }
    if (['index.js', `${currentDirName}.js`, 'index.mjs', `${currentDirName}.mjs`].includes(item.name)) {
      origin = item;
      return;
    }
  })

  if (origin && destination) {
    let originText = readFileSync(path.resolve(dirPath, origin.name));
    writeFileSync(path.resolve(dirPath, "index-source.md"), `
\`\`\`
  ${originText}
\`\`\`
    `)
  }

  dirs.forEach(item => {
    appendJSToMD(path.resolve(dirPath, item.name))
  })
}