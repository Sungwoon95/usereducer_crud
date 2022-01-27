import fs from 'fs'
import {resolve} from 'path'

const basePath = resolve()

const filenames = {
  contents: resolve(basePath, 'src/db/contents.json'),
  user: resolve(basePath, 'src/db/user.json')
}

export const readDB = target => {
  try{
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
  }catch(err){
    console.error(err)
  }
}

export const writeDB = (target, data) => {
  try{
    return fs.writeFileSync(filenames[filenames], JSON.stringify(data))
  }catch (err){
    console.error(err)
  }
}