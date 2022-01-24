import React,{useReducer} from 'react';

import {Arr} from './Arr'
import Item from './Item'
import Input from './Input'

const reducer = (state, action) => {
  switch(action.type){
    case 'CREATE':{
      const newContent = {
        ...action.data,
        userId: action.data.length + 1,
        timestamp: Date.now
      }
      return [newContent, ...state]
    }
    case 'REMOVE':{
      return state.filter(item=>
        item.userId !== action.targetId)
    }
    case 'UPDATE':{
      return state.map(item=>
        item.userId === action.targetId ? {...item, content:action.content} :item)
    }
    default:
      return state;
  }
}

const List = () => {
  const [data, dispatch] = useReducer(reducer, Arr)

  const onCreate = (name, content) => {
    dispatch({type:"CREATE", data:{userName:name, content}})
  }

  const onRemove = (targetId) => {
    dispatch({type:'REMOVE', targetId})
  }

  const onUpdate = (targetId, content) => {
    dispatch({type:'UPDATE', targetId, content})
  }

  return(
    <>
      <Input onCreate={onCreate}/>
      <ul>
        {data.map((item,idx)=>{
          return <Item key={idx} id={item.userId} 
          userId={item.userId} userName={item.userName} content={item.content} onRemove={onRemove} onUpdate={onUpdate}/>
        })}
      </ul>
    </>
  )
}

export default List;