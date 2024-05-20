import * as path from 'path';
import { readFileSync, readdirSync } from 'fs';
import { WordMap } from './types'

export default {
  // watch: ['./**/*'],
  load(){
    let viteConfig = readFileSync('../.vitepress/config.mts', 'utf-8');
    return {
      a: 12
    };
  }
}

type Nav = {
  text: WordMap,
  link: string,
}

type Sidebar = {
  text: string,
  collapsed?: boolean,
  link?: string,
  items?: Sidebar[]
}

function getRecursiveList(dirAbsolutePath: string, parentName: string){
  let resArray: Sidebar[] = [];
  // index.md放到最前面
  let items = readdirSync(path.resolve(dirAbsolutePath), {withFileTypes: true}).sort((a) => a.name === 'index.md' ? -1 : 1);
  items.map(item => {
    if(item.isDirectory()) {
      resArray.push({
        text: item.name,
        collapsed: true,
        items: getRecursiveList(`${dirAbsolutePath}/${item.name}`, `${parentName ? parentName + '/' : ''}${item.name}`)
      })
    } else if (item.isFile() && item.name.endsWith('.md')) {
      let text = `${item.name}`;
      let link = `${item.name}`
      if(item.name.indexOf('.') !== -1) {
        text = `${item.name.split('.').slice(0, -1).join('')}`
      }
      if(parentName) {
        link = `${parentName}/${item.name}`
      }
      resArray.push({ text, link });
    }
  })
  
  return resArray;
}

export function getNavList(dirAbsolutePath: string){
  return readdirSync(dirAbsolutePath, {withFileTypes: true})
            .filter(item => !!item.isDirectory())
            .map(item => ({ text: WordMap[item.name], link: `/${item.name}` }))
}

export function getNavAndSideBarInfo(): {navList: Nav[],  sidebarObj: any}{
  let prefix = [{text: WordMap.index, link: '/'}];
  let navList = getNavList(path.resolve(__dirname, ''));
  let sidebarObj = {};
  navList.forEach(item => {
    sidebarObj[item.link] = getRecursiveList(path.resolve(__dirname, `.${item.link}`), item.link);
  })
  return {
    navList: prefix.concat(navList),
    sidebarObj,
  }
}