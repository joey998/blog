import { execSync } from 'child_process';
import * as fs from "node:fs/promises";
import * as path from 'path';

async function main(){
  let watcher = fs.watch(__dirname, { recursive: true });
  for await (const event of watcher) {
    let {eventType, filename} = event;
    if (filename.startsWith('out')) {
      return
    }
    execSync(`rm -rf ${path.resolve(__dirname, 'out')} && npx jsdoc ${path.resolve(__dirname)}/`)
  }
}

main()