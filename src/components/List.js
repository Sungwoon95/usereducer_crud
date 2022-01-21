import React,{useState} from 'react';

import {Arr} from './Arr'
import Item from './Item'
import Input from './Input'

const List = () => {
  const [data, setData] = useState(Arr)

  const onCreate = (name, content) => {
    const newData = {
      userId : data.length + 1, 
      userName : name,
      content : content,
      timeStarmp: Date.now(),
    }
    setData([newData, ...data])
  }

  const onRemove = (targetId) => {
    const newDataList = data.filter((item)=>(
      item.userId !== targetId
    ))
    setData(newDataList)
  }

  const onUpdate = (targetId, content) => {
    setData(
      data.map((item) => (
        targetId === item.userId ? {...item, content} : item
      ))
    )
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