import { writeFileSync, existsSync } from 'fs';
import * as dotenv from 'dotenv';
import { Environment } from './src/environments/environment.interface';

const name = process.argv[2]; // get environment name from command line argument

if (!name) {
  throw new Error('Please specify an environment name');
}

dotenv.config();

const fileName = `src/environments/environment.${name}.ts`;

if (!existsSync(fileName)) {
  const env: Environment = {
    production: name === 'prod',
    title: process.env?.['TITLE'] ?? '',
    iframeUrl: process.env?.['IFRAME'] ?? ''
  };
  const content = `import { Environment } from './environment.interface';\n\nexport const environment: Environment = ${toTypeScriptObject(
    env
  )};\n`;

  writeFileSync(fileName, content);
}

function toTypeScriptObject(obj: any): string {
  let tsCode = '{\n';
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      tsCode += `  ${key}: ${toTypeScriptObject(obj[key])},\n`;
    } else if (typeof obj[key] === 'boolean' || typeof obj[key] === 'number') {
      tsCode += `  ${key}: ${obj[key]},\n`;
    } else {
      tsCode += `  ${key}: "${obj[key]}",\n`;
    }
  }
  tsCode += '}';
  return tsCode;
}
