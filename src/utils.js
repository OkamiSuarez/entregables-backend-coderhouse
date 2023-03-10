// Crear dirname por que usamos module
import {dirname} from 'path'
import { fileURLToPath } from 'url'

export const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname);
// console.log("__dirname",__dirname+'/public');