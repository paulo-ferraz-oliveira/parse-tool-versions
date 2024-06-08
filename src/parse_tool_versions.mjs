import * as fs from 'fs';
import * as path from 'path';
import * as core from '@actions/core';

// These might turn into options one day
const dotToolVersionsPath = path.join(process.env.GITHUB_WORKSPACE, '.tool-versions');

export function exec() {
  const appVersions = parse();
  exposeEnvVariables(appVersions);
}

function parse() {
  if (!fs.existsSync(dotToolVersionsPath)) {
    throw new Error(`The specified file does not exist at ${dotToolVersionsPath}`);
  }
  const appVersions = new Map();
  console.log(`##[group]Parsing versions`);
  console.log(`File: ${dotToolVersionsPath}`);
  const versions = fs.readFileSync(dotToolVersionsPath, 'utf8');
  versions.split('\n').forEach((line) => {
    const appVersion = line.match(/^([^ #]+)[ ]+(ref:v?)?([^ #\r\n]+)/);
    if (appVersion) {
      const app = appVersion[1];
      const [, , , version] = appVersion;
      appVersions.set(app, version);
      console.log(`Consuming ${app} at version ${version}`);
    }
  });
  if (!appVersions.size) {
    console.log('There was apparently nothing to consume');
  } else {
    console.log('... done!');
  }
  console.log('##[endgroup]');

  return appVersions;
}

function exposeEnvVariables(appVersions) {
  if (process.env.GITHUB_ACTION == '__self') {
    throw new Error(`It seems this step has no id property...`);
  }
  if (appVersions.size) {
    console.log('##[group]Setting outputs');
    appVersions.forEach((value, key) => {
      core.setOutput(key, value);
      console.log(`\$\{\{steps.${process.env.GITHUB_ACTION}.outputs.${key}\}\} => ${value}`);
    });
    console.log('##[endgroup]');
  }
}
