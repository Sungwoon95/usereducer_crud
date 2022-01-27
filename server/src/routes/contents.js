import {v4} from 'uuid'
import {readDB, writeDB} from '../dbController.js'

const getContents = () => {
  return readDB('contents')
}

const setContents = (data) => {
  return writeDB('contents', data)
}

const contentRoute = [
  {
    method:'get',
    route:'/contents',
    handler: (req,res) => {
      const contents = getContents()
      res.send(contents)
    }
  },{
    method:'get',
    route:'/contents/:userId',
    handler: ({params:{userId}},res) => {
      try{
        const contents = getContents()
        const content = contents.find(item=> item.userId === userId)

        if(!content) throw Error('not')
        res.send(content)
      }
      catch(err){
        res.status(404).send({error:err})
      }
    }
  },{
    method:'post',
    route:'/contents',
    handler: ({body},res) => {
      const contents = getContents()
      const newContent = {
        userId: v4(),
        content: body.content,
        timeStamp: Date.now()
      }
      contents.unshift(newContent)
      setContents(contents)
      res.send(newContent)
    }
  },{
    method:'put',
    route:'/contents/:id',
    handler: ({body, params:{id}},res) => {
      try{
        const contents = getContents()
        const newContents = contents.map(item=>
          item.id === id ? {...item, content:body.content} : item
          )
        setContents(contents)
        res.send(newContents)
      }catch(err){
        res.status(500).send({error: err})
      }
    }
  },{
    method:'delete',
    route:'/contents/:id',
    handler: ({body, params:{id}},res) => {
      try{
        const contents = getContents()
        const newContents  = contents.filter(item=>
          (item.id !== id)
      )
      setContents(contents)
      res.send(id)
      }catch(err){
        res.status(500).send({error: err})
      }
    }
  },
]

export default contentRoute