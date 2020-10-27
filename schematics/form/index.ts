import { apply, applyTemplates, chain, mergeWith, move, noop, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core'
import config from './config'


function quote(text: string | number) {
  return typeof text === 'string' ? `'${text}'` : text
}


function updateApp() {
  return (tree: Tree) => {
    const appPath = './src/App.vue'
    const appFile = tree.get(appPath)
    const recorder = tree.beginUpdate(appPath)
    const matchStr = appFile?.content.toString().match(/id="formModalContainer"(?:.|\s)*?(?=<\/div>)/)
    const addButtonStr = `  <a-button class="linkButton" @click="openModal('${config.name}')">${config.name}</a-button> 
          `
    if (matchStr) {
      recorder.insertLeft(matchStr.index as number + matchStr[0].length, addButtonStr)
    }

    const matchStr2 = appFile?.content.toString().match(/id="formContainer"(?:.|\s)*?(?=<\/template>)/)
    const addFormStr = `  <${strings.dasherize(config.name)} ref="${config.name}"></${strings.dasherize(config.name)}> 
      `
    if (matchStr2) {
      recorder.insertLeft(matchStr2.index as number + matchStr2[0].length, addFormStr)
    }

    const matchStr3 = appFile?.content.toString().match(/@Component\({(?:.|\s)*?(?=})/)
    const addImportStr = `import ${strings.camelize(config.name)}Form from './components/form/${config.name}Form.vue'
`
    const addComponentStr = `  "${strings.dasherize(config.name)}":${strings.camelize(config.name)}Form,
    `
    if (matchStr3) {
      recorder.insertLeft(matchStr3.index as number, addImportStr)
      recorder.insertLeft(matchStr3.index as number + matchStr3[0].length, addComponentStr)
    }
    tree.commitUpdate(recorder)
    return tree
  }
}

export function Form(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const addFiles = apply(url('./files'), [applyTemplates({ ...config, ..._options, ...strings, quote: quote }), move(config.path)])
    return chain([mergeWith(addFiles),updateApp]);
  };
}
