import React,{useState, useRef} from 'react';

const Input = (props) => {
  const [state, setState] = useState({
    text:'',
    name:'',
  })

  const onChangeHandle = (e) => {
    setState({...state,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    props.onCreate(state.name, state.text)
    setState({
      name: '',
      text: '',
    })
  }



  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='userName'>이름</label>
      <input id='userName' name='name' type='text' value={state.name} onChange={onChangeHandle}/>
      <br />
      <label htmlFor='userContent'>내용</label>
      <input id='userContent' name='text' type='text' value={state.text} onChange={onChangeHandle}/>
      <br />
      <button>입력</button>
    </form>
  )
}

export default Input