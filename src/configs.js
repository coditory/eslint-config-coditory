import YAML from 'yamljs';
import path from 'path';

const configs = () => {
  const configsPath = path.resolve(__dirname, 'configs.yml');
  return YAML.load(configsPath);
};

export default configs;
