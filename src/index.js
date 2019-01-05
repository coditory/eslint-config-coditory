import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import configs from './configs';

const targetPath = process.argv[2] || './dist';
mkdirp.sync(targetPath);

const writeConfigEntryPoint = (name, config) => {
  const stringifiedConfig = JSON.stringify(config, null, 2);
  const stringifiedModule = `module.exports = ${stringifiedConfig}`;
  const configPath = path.resolve(targetPath, `${name}.js`);
  console.log(`Generated eslint config ${name} in ${configPath}`);
  fs.writeFileSync(configPath, stringifiedModule);
};

Object.entries(configs())
  .forEach(([name, config]) => writeConfigEntryPoint(name, config));
