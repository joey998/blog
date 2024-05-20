import * as path from 'path';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { WordMap } from './types'

export default {
  watch: ['./src/**/*'],
  load(){
    let viteConfig = readFileSync('./.vitepress/config.mts', 'utf-8');
    console.log('aaa', viteConfig)
    // writeFileSync('./.vitepress/config.mts', viteConfig)
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
  let resArray: Sidebar[] = [] 
  let items = readdirSync(path.resolve(dirAbsolutePath), {withFileTypes: true});
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

export function getNavAndSideBarInfo(): {navList: Nav[], sideBarList: Sidebar[], sidebarObj: any}{
  let prefix = [{text: WordMap.index, link: '/'}];
  let navList = getNavList(path.resolve(__dirname, 'src'));
  let sideBarList = getRecursiveList(path.resolve(__dirname, 'src'), '');
  let sidebarObj = {};
  navList.forEach(item => {
    sidebarObj[item.link] = getRecursiveList(path.resolve(__dirname, `src/${item.link}`), item.link);
  })
  return {
    navList: prefix.concat(navList),
    sideBarList,
    sidebarObj,
  }
}