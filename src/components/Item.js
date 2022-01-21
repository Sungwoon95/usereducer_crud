import React,{useState} from 'react';

const Item = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(props.content)
  const isEditToggle = () => setIsEdit(!isEdit)

  const onChangeHandle = (e) => {
    setText(e.target.value)
  }
  
  const exitEdit = () => {
    setText(props.content)
    isEditToggle();
  }
  const completeEdit = () => {
    props.onUpdate(props.id, text)
    isEditToggle();
  }

  

  return (
    <div className='Item'>
      <p>이름:{props.userName}</p>
      <p>내용:
        {isEdit 
        ?
        <input type='text' value={text} onChange={onChangeHandle}/>
        :
        props.content
      }
      </p>
      <div>
        {isEdit
        ?
        <>
        <button onClick={completeEdit}>완료</button>
        <button onClick={exitEdit}>취소</button>
        </>
        :
        <>
        <button onClick={isEditToggle}>수정</button>
        <button onClick={()=>{props.onRemove(props.id)}}>삭제</button>
        </>
        }
        
      </div>
    </div>
  )
}

export default Item;