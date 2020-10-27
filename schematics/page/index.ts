import { apply, applyTemplates, chain, mergeWith, move, noop, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core'
import config from './config'
// You don't have to export the function as default. You can also have more than one rule factory
// per file.

function quote(text: string | number) {
  return typeof text === 'string' ? `'${text}'` : text
}

function updateRoute() {
  return (tree: Tree) => {
    const routePath = './src/router/index.ts'
    const routeFile = tree.get(routePath)
    const recorder = tree.beginUpdate(routePath);
    const matchStr = routeFile?.content.toString().match(/Array<RouteConfig>(?:.|\n)*?(?=])/)
    const addRouteStr = ` ,{
      path: '/${config.name}',
      name: '${config.name}',
      component: () => import(/* webpackChunkName: "${config.name}" */ '../views/${config.name}Page/${config.name}Page.vue')
  }
`
    if (matchStr) {
      recorder.insertLeft(matchStr.index as number + matchStr[0].length, addRouteStr)
    }
    tree.commitUpdate(recorder)
    return tree
  }
}

function updateApp() {
  return (tree: Tree) => {
    const appPath = './src/App.vue'
    const appFile = tree.get(appPath)
    const recorder = tree.beginUpdate(appPath)
    const matchStr = appFile?.content.toString().match(/id="routelinkContainer"(?:.|\n)*?(?=<\/div>)/)
    const addAppStr = `<router-link to="${config.name}"><a-button class="linkButton">${config.name}</a-button></router-link> 
        `
    if (matchStr) {
      recorder.insertLeft(matchStr.index as number + matchStr[0].length, addAppStr)
    }
    tree.commitUpdate(recorder)
    return tree
  }
}

export function Page(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const addFiles = apply(url('./files'), [applyTemplates({ ...config, ..._options, ...strings, quote: quote }), move(config.path)])
    return chain([mergeWith(addFiles), updateRoute, updateApp]);
  };
}
