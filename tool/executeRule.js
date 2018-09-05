const glob = require('glob');
const fs = require('fs-extra');
const { join, basename } = require('path');

const getRealPath = (p) => {
  return join(__dirname, '..', p);
};

const rfRule = (path) => {
  fs.removeSync(path);
};

const cpRule = (path, { target }) => {
  let realPath = getRealPath(target);
  if (target.endsWith('/')) {
    realPath = join(realPath, basename(path))
  }
  fs.copySync(path, realPath);
};

const modifyRule = (path, { ops }) => {
  let fileContent = '' + fs.readFileSync(path);
  ops.forEach(({ match, replace }) => {
    fileContent = fileContent.replace(match, replace);
  });
  fs.writeFileSync(path, fileContent);
};

const renamRule = (path, { name }) => {
  const oldName = basename(path);
  if (typeof name === 'function') {
    name = name(oldName);
  }
  fs.moveSync(path, path.replace(oldName, name));
};

function executeRule(rule, dot) {
  const { pattern, operation } = rule;
  const files = glob.sync(pattern, { dot });
  console.log(`find ${files.length} matched for ${pattern}`);
  files.forEach((f => {
    const realPath = getRealPath(f);
    let op = () => { console.warn(`not find operation: ${operation}`); };
    switch(operation) {
      case 'rf':
        op = rfRule;
        break;
      case 'cp':
        op = cpRule;
        break;
      case 'modify':
        op = modifyRule;
        break;
      case 'rename':
        op = renamRule;
        break;
    }
    console.log(`start execute ${operation} for ${realPath} ...`);
    op(realPath, rule);
  }));
};

module.exports = executeRule;

